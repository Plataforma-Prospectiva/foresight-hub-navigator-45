import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Database } from "lucide-react";
import AdminPanel from "./AdminPanel";
import { DatabaseTechniquesManager } from "@/components/DatabaseTechniquesManager";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Panel de Administración</h1>
                <p className="text-sm text-muted-foreground">Gestión de usuarios y técnicas</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="users" className="gap-2">
              <Shield className="w-4 h-4" />
              Usuarios
            </TabsTrigger>
            <TabsTrigger value="techniques" className="gap-2">
              <Database className="w-4 h-4" />
              Técnicas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <AdminPanel />
          </TabsContent>

          <TabsContent value="techniques" className="space-y-4">
            <DatabaseTechniquesManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
