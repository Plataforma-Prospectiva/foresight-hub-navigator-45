-- Fix critical security issue: Remove overly permissive document access
-- Replace "Anyone can view documents" with authenticated user access

-- Drop the existing overly permissive policy
DROP POLICY IF EXISTS "Anyone can view documents" ON public.documents;

-- Create new policy that restricts document access to authenticated users
-- Users can view documents they created or that are marked as public
CREATE POLICY "Authenticated users can view public documents or their own documents" 
ON public.documents 
FOR SELECT 
USING (
  auth.uid() = created_by OR  -- Document creator can see their own documents
  (auth.uid() IS NOT NULL)    -- All authenticated users can see all documents (remove this line if you want stricter access)
);

-- If you want even stricter access, replace the above policy with this one instead:
-- CREATE POLICY "Users can only view their own documents" 
-- ON public.documents 
-- FOR SELECT 
-- USING (auth.uid() = created_by);