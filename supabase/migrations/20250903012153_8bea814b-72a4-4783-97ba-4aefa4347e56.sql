-- Create admin user directly in auth.users with confirmed email
-- Password will be 'Perrito' (needs to be hashed)
INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  role
) VALUES (
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  '00000000-0000-0000-0000-000000000000',
  'admin@admin.com',
  crypt('Perrito', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider": "email", "providers": ["email"]}',
  '{"display_name": "Admin"}',
  false,
  'authenticated'
) ON CONFLICT (email) DO NOTHING;

-- Create profile for admin user
INSERT INTO public.profiles (
  id,
  user_id,
  email,
  display_name,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid(),
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  'admin@admin.com',
  'Admin',
  now(),
  now()
) ON CONFLICT (user_id) DO NOTHING;

-- Assign admin role to the admin user
INSERT INTO public.user_roles (
  id,
  user_id,
  role,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid(),
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  'admin',
  now(),
  now()
) ON CONFLICT (user_id, role) DO NOTHING;