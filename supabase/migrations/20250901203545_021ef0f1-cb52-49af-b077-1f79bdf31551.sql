-- Create access logs table for detailed tracking
CREATE TABLE public.access_logs (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id),
  ip_address text NOT NULL,
  user_agent text,
  referer text,
  country text,
  region text,
  city text,
  timezone text,
  device_type text,
  browser text,
  os text,
  screen_resolution text,
  language text,
  session_id text,
  page_url text,
  action_type text NOT NULL DEFAULT 'page_visit',
  additional_data jsonb DEFAULT '{}',
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.access_logs ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Admins can view all access logs" 
ON public.access_logs 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM public.user_roles 
  WHERE user_id = auth.uid() AND role = 'admin'
));

CREATE POLICY "System can insert access logs" 
ON public.access_logs 
FOR INSERT 
WITH CHECK (true);

-- Create index for better performance
CREATE INDEX idx_access_logs_created_at ON public.access_logs(created_at DESC);
CREATE INDEX idx_access_logs_ip_address ON public.access_logs(ip_address);
CREATE INDEX idx_access_logs_user_id ON public.access_logs(user_id);