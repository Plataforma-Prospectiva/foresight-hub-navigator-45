-- Create techniques table
CREATE TABLE public.techniques (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  technique_id TEXT UNIQUE NOT NULL, -- ID personalizado de la técnica
  name TEXT NOT NULL,
  icon_name TEXT NOT NULL, -- Nombre del icono de Lucide
  complexity INTEGER NOT NULL CHECK (complexity >= 1 AND complexity <= 5),
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  objectives TEXT[] NOT NULL DEFAULT '{}',
  applications TEXT[] NOT NULL DEFAULT '{}',
  methodology JSONB NOT NULL DEFAULT '[]', -- Array de MethodologyStep
  advantages TEXT[] NOT NULL DEFAULT '{}',
  limitations TEXT[] NOT NULL DEFAULT '{}',
  time_horizon TEXT NOT NULL,
  participants TEXT NOT NULL,
  bibliographic_sources JSONB NOT NULL DEFAULT '[]', -- Array de BibliographicSource
  language TEXT NOT NULL DEFAULT 'es', -- Idioma de la técnica
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id),
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Enable RLS
ALTER TABLE public.techniques ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view active techniques" 
ON public.techniques 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Admins can create techniques" 
ON public.techniques 
FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'::app_role
  )
);

CREATE POLICY "Admins can update techniques" 
ON public.techniques 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'::app_role
  )
);

CREATE POLICY "Admins can delete techniques" 
ON public.techniques 
FOR DELETE 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'::app_role
  )
);

-- Create indexes for better performance
CREATE INDEX idx_techniques_category ON public.techniques(category);
CREATE INDEX idx_techniques_complexity ON public.techniques(complexity);
CREATE INDEX idx_techniques_language ON public.techniques(language);
CREATE INDEX idx_techniques_is_active ON public.techniques(is_active);

-- Create trigger for updated_at
CREATE TRIGGER update_techniques_updated_at
  BEFORE UPDATE ON public.techniques
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();