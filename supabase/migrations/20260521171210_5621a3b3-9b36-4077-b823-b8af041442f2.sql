-- Status enum
CREATE TYPE public.case_status AS ENUM ('pending', 'approved', 'rejected');

-- Application cases table
CREATE TABLE public.application_cases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  context TEXT,
  sector TEXT,
  country TEXT,
  organization TEXT,
  year INTEGER,
  objective TEXT,
  description TEXT,
  methodology_summary TEXT,
  results TEXT,
  lessons_learned TEXT,
  references_text TEXT,
  language TEXT NOT NULL DEFAULT 'es',
  status public.case_status NOT NULL DEFAULT 'pending',
  submitted_by UUID,
  reviewed_by UUID,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Linking table to techniques (by technique_id text, language-agnostic key)
CREATE TABLE public.application_case_techniques (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  case_id UUID NOT NULL REFERENCES public.application_cases(id) ON DELETE CASCADE,
  technique_id TEXT NOT NULL,
  sequence_order INTEGER NOT NULL DEFAULT 1,
  combination_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_app_cases_status ON public.application_cases(status);
CREATE INDEX idx_app_cases_language ON public.application_cases(language);
CREATE INDEX idx_app_case_techniques_case ON public.application_case_techniques(case_id);
CREATE INDEX idx_app_case_techniques_technique ON public.application_case_techniques(technique_id);

-- Enable RLS
ALTER TABLE public.application_cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.application_case_techniques ENABLE ROW LEVEL SECURITY;

-- Policies: application_cases
CREATE POLICY "Anyone can view approved cases"
  ON public.application_cases FOR SELECT
  USING (status = 'approved' OR public.has_role(auth.uid(), 'admin') OR auth.uid() = submitted_by);

CREATE POLICY "Authenticated users can submit cases"
  ON public.application_cases FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = submitted_by AND status = 'pending');

CREATE POLICY "Authors can update own pending cases"
  ON public.application_cases FOR UPDATE
  TO authenticated
  USING (auth.uid() = submitted_by AND status = 'pending')
  WITH CHECK (auth.uid() = submitted_by AND status = 'pending');

CREATE POLICY "Admins can update any case"
  ON public.application_cases FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete cases"
  ON public.application_cases FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- Policies: application_case_techniques
CREATE POLICY "View techniques for visible cases"
  ON public.application_case_techniques FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.application_cases c
      WHERE c.id = case_id
        AND (c.status = 'approved' OR public.has_role(auth.uid(), 'admin') OR auth.uid() = c.submitted_by)
    )
  );

CREATE POLICY "Authors manage techniques of own pending cases"
  ON public.application_case_techniques FOR ALL
  TO authenticated
  USING (
    EXISTS (SELECT 1 FROM public.application_cases c
            WHERE c.id = case_id AND c.submitted_by = auth.uid() AND c.status = 'pending')
  )
  WITH CHECK (
    EXISTS (SELECT 1 FROM public.application_cases c
            WHERE c.id = case_id AND c.submitted_by = auth.uid() AND c.status = 'pending')
  );

CREATE POLICY "Admins manage all case techniques"
  ON public.application_case_techniques FOR ALL
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Timestamp trigger
CREATE TRIGGER update_application_cases_updated_at
  BEFORE UPDATE ON public.application_cases
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();