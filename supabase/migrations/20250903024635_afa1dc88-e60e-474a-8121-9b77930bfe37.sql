-- Duplicate Spanish techniques into English language for parity
INSERT INTO public.techniques (
  complexity, methodology, bibliographic_sources, created_by, is_active,
  name, icon_name, participants, category, description,
  objectives, applications, language, advantages, limitations,
  time_horizon, technique_id
)
SELECT 
  t_es.complexity, t_es.methodology, t_es.bibliographic_sources, t_es.created_by, t_es.is_active,
  t_es.name, t_es.icon_name, t_es.participants, t_es.category, t_es.description,
  t_es.objectives, t_es.applications, 'en' AS language, t_es.advantages, t_es.limitations,
  t_es.time_horizon, t_es.technique_id
FROM public.techniques t_es
WHERE t_es.language = 'es'
  AND t_es.is_active = true
  AND NOT EXISTS (
    SELECT 1 FROM public.techniques t_en
    WHERE t_en.technique_id = t_es.technique_id
      AND t_en.language = 'en'
  );