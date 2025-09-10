-- Drop the existing overly restrictive SELECT policy for experts
DROP POLICY IF EXISTS "Users can view their own experts" ON public.experts;

-- Create a more comprehensive SELECT policy that allows:
-- 1. Expert creators to view their own expert records
-- 2. Study owners to view experts who participate in their studies
CREATE POLICY "Users can view their own experts or study participants" 
ON public.experts 
FOR SELECT 
USING (
  auth.uid() = user_id OR  -- Expert creator can see their own experts
  EXISTS (
    SELECT 1 
    FROM study_participants sp
    JOIN studies s ON sp.study_id = s.id
    WHERE sp.expert_id = experts.id 
    AND s.user_id = auth.uid()  -- Study owner can see participating experts
  )
);

-- Also update the INSERT policy to ensure proper ownership
DROP POLICY IF EXISTS "Users can create their own experts" ON public.experts;
CREATE POLICY "Users can create their own experts" 
ON public.experts 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Update UPDATE policy for clarity
DROP POLICY IF EXISTS "Users can update their own experts" ON public.experts;
CREATE POLICY "Users can update their own experts" 
ON public.experts 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Update DELETE policy for clarity  
DROP POLICY IF EXISTS "Users can delete their own experts" ON public.experts;
CREATE POLICY "Users can delete their own experts" 
ON public.experts 
FOR DELETE 
USING (auth.uid() = user_id);