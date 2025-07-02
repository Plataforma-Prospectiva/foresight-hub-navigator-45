
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Users, Trash2, Edit } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export const UserManagement = () => {
  const { user, users, addUser, updateUser, deleteUser } = useAuth();
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserRole, setNewUserRole] = useState<"admin" | "user">("user");
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editRole, setEditRole] = useState<"admin" | "user">("user");

  // Solo admins pueden ver este componente
  if (!user || user.role !== 'admin') {
    return null;
  }

  const handleAddUser = () => {
    if (newUserName && newUserEmail) {
      addUser({
        name: newUserName,
        email: newUserEmail,
        role: newUserRole
      });
      setNewUserName("");
      setNewUserEmail("");
      setNewUserRole("user");
    }
  };

  const handleEditUser = (userId: string) => {
    const userToEdit = users.find(u => u.id === userId);
    if (userToEdit) {
      setEditingUser(userId);
      setEditName(userToEdit.name);
      setEditEmail(userToEdit.email);
      setEditRole(userToEdit.role);
    }
  };

  const handleUpdateUser = () => {
    if (editingUser && editName && editEmail) {
      updateUser(editingUser, {
        name: editName,
        email: editEmail,
        role: editRole
      });
      setEditingUser(null);
    }
  };

  const handleDeleteUser = (userId: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
      deleteUser(userId);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm">
          <Users className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Gestión de Usuarios</SheetTitle>
          <SheetDescription>
            Administra los usuarios de la plataforma.
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          {/* Agregar Usuario */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Agregar Usuario</h3>
            
            <div className="space-y-2">
              <Label htmlFor="new-user-name">Nombre</Label>
              <Input
                id="new-user-name"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                placeholder="Nombre del usuario"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-user-email">Email</Label>
              <Input
                id="new-user-email"
                type="email"
                value={newUserEmail}
                onChange={(e) => setNewUserEmail(e.target.value)}
                placeholder="email@ejemplo.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-user-role">Rol</Label>
              <Select value={newUserRole} onValueChange={(value) => setNewUserRole(value as "admin" | "user")}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user">Usuario</SelectItem>
                  <SelectItem value="admin">Administrador</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={handleAddUser} className="w-full">
              Agregar Usuario
            </Button>
          </div>

          {/* Lista de Usuarios */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Usuarios Existentes</h3>
            
            <div className="space-y-3">
              {users.map((userItem) => (
                <div key={userItem.id} className="p-3 border rounded-lg">
                  {editingUser === userItem.id ? (
                    <div className="space-y-3">
                      <Input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        placeholder="Nombre"
                      />
                      <Input
                        type="email"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        placeholder="Email"
                      />
                      <Select value={editRole} onValueChange={(value) => setEditRole(value as "admin" | "user")}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="user">Usuario</SelectItem>
                          <SelectItem value="admin">Administrador</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="flex gap-2">
                        <Button size="sm" onClick={handleUpdateUser}>
                          Guardar
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => setEditingUser(null)}>
                          Cancelar
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{userItem.name}</p>
                        <p className="text-sm text-gray-600">{userItem.email}</p>
                        <p className="text-xs text-gray-500 capitalize">{userItem.role}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditUser(userItem.id)}
                        >
                          <Edit className="w-3 h-3" />
                        </Button>
                        {userItem.id !== user.id && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeleteUser(userItem.id)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
