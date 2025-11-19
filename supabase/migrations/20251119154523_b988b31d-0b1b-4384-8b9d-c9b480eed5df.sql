-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create access_logs table for tracking user activity
CREATE TABLE public.access_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ip_address TEXT NOT NULL,
  user_agent TEXT NOT NULL,
  referer TEXT,
  country TEXT,
  region TEXT,
  city TEXT,
  timezone TEXT NOT NULL DEFAULT 'UTC',
  device_type TEXT NOT NULL,
  browser TEXT NOT NULL,
  os TEXT NOT NULL,
  screen_resolution TEXT,
  language TEXT NOT NULL,
  session_id TEXT NOT NULL,
  page_url TEXT NOT NULL,
  action_type TEXT NOT NULL,
  additional_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.access_logs ENABLE ROW LEVEL SECURITY;

-- RLS policies for access_logs
CREATE POLICY "Admins can view all access logs"
  ON public.access_logs
  FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Anyone can insert access logs"
  ON public.access_logs
  FOR INSERT
  WITH CHECK (true);

-- Create techniques table
CREATE TABLE public.techniques (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  technique_id TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  icon_name TEXT,
  complexity INTEGER NOT NULL CHECK (complexity BETWEEN 1 AND 5),
  category TEXT NOT NULL,
  description TEXT,
  objectives TEXT,
  applications TEXT,
  methodology TEXT,
  advantages TEXT,
  limitations TEXT,
  time_horizon TEXT,
  participants_min INTEGER,
  participants_max INTEGER,
  required_resources TEXT,
  duration_estimate TEXT,
  difficulty_level TEXT,
  recommended_for TEXT,
  technique_references TEXT,
  examples TEXT,
  language TEXT NOT NULL DEFAULT 'es',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.techniques ENABLE ROW LEVEL SECURITY;

-- RLS policies for techniques
CREATE POLICY "Anyone can view techniques"
  ON public.techniques
  FOR SELECT
  USING (true);

CREATE POLICY "Admins can insert techniques"
  ON public.techniques
  FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can update techniques"
  ON public.techniques
  FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can delete techniques"
  ON public.techniques
  FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'::public.app_role));

-- Create trigger for updating techniques updated_at
CREATE TRIGGER update_techniques_updated_at
  BEFORE UPDATE ON public.techniques
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Add beta role to enum for beta testers
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'beta';