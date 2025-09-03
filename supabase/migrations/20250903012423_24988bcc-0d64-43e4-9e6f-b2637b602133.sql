-- Confirm email for admin@admin.com user if exists
UPDATE auth.users 
SET email_confirmed_at = now()
WHERE email = 'admin@admin.com' 
  AND email_confirmed_at IS NULL;