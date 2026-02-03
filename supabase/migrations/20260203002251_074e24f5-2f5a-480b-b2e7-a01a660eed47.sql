-- Add unique constraint for technique_id and language to support upsert
ALTER TABLE public.techniques
ADD CONSTRAINT techniques_technique_id_language_key UNIQUE (technique_id, language);