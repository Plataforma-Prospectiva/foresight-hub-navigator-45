import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Shield, UserCog, Trash2 } from 'lucide-react';

type AppRole = 'admin' | 'moderator' | 'user';

interface UserProfile {
  id: string;
  email: string;
  display_name: string | null;
  created_at: string;
  roles: AppRole[];
}

export default function AdminPanel() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      
      // Fetch profiles with user_id joining (profiles.id references auth.users.id)
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('id, display_name, created_at');

      if (profilesError) throw profilesError;

      // Fetch all user roles
      const { data: userRoles, error: rolesError } = await supabase
        .from('user_roles')
        .select('user_id, role');

      if (rolesError) throw rolesError;

      // Combine data
      const usersData: UserProfile[] = profiles?.map(profile => {
        const roles = userRoles?.filter(r => r.user_id === profile.id).map(r => r.role as AppRole) || [];
        
        return {
          id: profile.id,
          email: `${profile.display_name || 'user'}@...`, // Email not directly accessible without admin API
          display_name: profile.display_name,
          created_at: profile.created_at,
          roles
        };
      }) || [];

      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Error al cargar usuarios');
    } finally {
      setLoading(false);
    }
  };

  const handleAssignRole = async (userId: string, role: AppRole) => {
    try {
      const { error } = await supabase
        .from('user_roles')
        .insert({ user_id: userId, role });

      if (error) throw error;

      toast.success(`Rol "${role}" asignado correctamente`);
      fetchUsers();
    } catch (error: any) {
      if (error.code === '23505') {
        toast.error('El usuario ya tiene este rol');
      } else {
        console.error('Error assigning role:', error);
        toast.error('Error al asignar rol');
      }
    }
  };

  const handleRemoveRole = async (userId: string, role: AppRole) => {
    try {
      const { error } = await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', userId)
        .eq('role', role);

      if (error) throw error;

      toast.success(`Rol "${role}" removido correctamente`);
      fetchUsers();
    } catch (error) {
      console.error('Error removing role:', error);
      toast.error('Error al remover rol');
    }
  };

  const getRoleBadgeVariant = (role: AppRole) => {
    switch (role) {
      case 'admin':
        return 'destructive';
      case 'moderator':
        return 'default';
      default:
        return 'secondary';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Shield className="w-8 h-8" />
          Panel de Administración
        </h1>
        <p className="text-muted-foreground mt-2">Gestiona usuarios y roles del sistema</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCog className="w-5 h-5" />
            Usuarios Registrados
          </CardTitle>
          <CardDescription>
            Total de usuarios: {users.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Roles Actuales</TableHead>
                <TableHead>Asignar Rol</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.email}</TableCell>
                  <TableCell>{user.display_name || 'Sin nombre'}</TableCell>
                  <TableCell>
                    <div className="flex gap-2 flex-wrap">
                      {user.roles.length > 0 ? (
                        user.roles.map((role) => (
                          <Badge key={role} variant={getRoleBadgeVariant(role)}>
                            {role}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-muted-foreground text-sm">Sin roles</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select onValueChange={(value) => handleAssignRole(user.id, value as AppRole)}>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Seleccionar rol" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="moderator">Moderador</SelectItem>
                        <SelectItem value="user">Usuario</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {user.roles.map((role) => (
                        <Button
                          key={role}
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveRole(user.id, role)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
