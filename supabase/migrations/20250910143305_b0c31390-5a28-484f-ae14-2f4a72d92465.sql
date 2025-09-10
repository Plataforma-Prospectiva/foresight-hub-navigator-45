-- Tighten experts table RLS: restrict SELECT to creator only
DROP POLICY IF EXISTS "Users can view their own experts or study participants" ON public.experts;
DROP POLICY IF EXISTS "Users can view their own experts" ON public.experts;
CREATE POLICY "Users can view their own experts"
ON public.experts
FOR SELECT
USING (auth.uid() = user_id);

-- Create SECURITY DEFINER helper to avoid RLS dependency when validating expert identity
CREATE OR REPLACE FUNCTION public.expert_matches_auth_user(_expert_id uuid, _auth_user_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
DECLARE
  expert_email text;
  auth_email text;
BEGIN
  SELECT e.email INTO expert_email FROM public.experts e WHERE e.id = _expert_id;
  IF expert_email IS NULL THEN
    RETURN FALSE;
  END IF;

  SELECT u.email::text INTO auth_email FROM auth.users u WHERE u.id = _auth_user_id;
  IF auth_email IS NULL THEN
    RETURN FALSE;
  END IF;

  RETURN expert_email = auth_email;
END;
$$;

-- Update study_responses policies to use the helper function
DROP POLICY IF EXISTS "Experts can insert their own responses" ON public.study_responses;
CREATE POLICY "Experts can insert their own responses"
ON public.study_responses
FOR INSERT
WITH CHECK (public.expert_matches_auth_user(expert_id, auth.uid()));

DROP POLICY IF EXISTS "Experts can update their own responses" ON public.study_responses;
CREATE POLICY "Experts can update their own responses"
ON public.study_responses
FOR UPDATE
USING (public.expert_matches_auth_user(expert_id, auth.uid()));

DROP POLICY IF EXISTS "Experts can view their own responses" ON public.study_responses;
CREATE POLICY "Experts can view their own responses"
ON public.study_responses
FOR SELECT
USING (public.expert_matches_auth_user(expert_id, auth.uid()));