-- Update techniques in database to use correct categories for consistency

-- Update technique categories that don't match the standardized set
UPDATE techniques 
SET category = 'group-dynamics'
WHERE technique_id IN ('world-cafe', 'expert-panels')
  AND category IN ('evaluation', 'orientation');

UPDATE techniques 
SET category = 'knowledge-transfer'
WHERE technique_id IN ('knowledge-cafe', 'learning-journey')
  AND category = 'orientation';

UPDATE techniques 
SET category = 'speculative-design'
WHERE technique_id IN ('design-fiction', 'speculative-objects')
  AND category = 'exhibition';

UPDATE techniques 
SET category = 'user-centered'
WHERE technique_id IN ('user-journey-mapping', 'persona-development')
  AND category IN ('experiential', 'analytical');