import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Activity, Eye, MapPin, Monitor, Globe, Clock, User, Smartphone } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface AccessLog {
  id: string;
  user_id: string | null;
  ip_address: string;
  user_agent: string;
  referer: string;
  country: string | null;
  region: string | null;
  city: string | null;
  timezone: string;
  device_type: string;
  browser: string;
  os: string;
  screen_resolution: string;
  language: string;
  session_id: string;
  page_url: string;
  action_type: string;
  additional_data: any;
  created_at: string;
}

export const AccessLogsViewer = () => {
  const { user } = useAuth();
  const [logs, setLogs] = useState<AccessLog[]>([]);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    totalVisits: 0,
    uniqueIPs: 0,
    countries: 0,
    deviceTypes: {} as Record<string, number>
  });

  // Solo admins pueden ver este componente
  if (!user || user.role !== 'admin') {
    return null;
  }

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('access_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) {
        toast.error('Error al cargar los logs de acceso');
        console.error('Error fetching access logs:', error);
        return;
      }

      setLogs(data || []);
      
      // Calculate stats
      const uniqueIPs = new Set(data?.map(log => log.ip_address) || []).size;
      const uniqueCountries = new Set(data?.map(log => log.country).filter(Boolean) || []).size;
      const deviceTypeCounts = (data || []).reduce((acc, log) => {
        acc[log.device_type] = (acc[log.device_type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      setStats({
        totalVisits: data?.length || 0,
        uniqueIPs,
        countries: uniqueCountries,
        deviceTypes: deviceTypeCounts
      });

    } catch (error) {
      console.error('Error in fetchLogs:', error);
      toast.error('Error inesperado al cargar los logs');
    } finally {
      setLoading(false);
    }
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getActionColor = (actionType: string) => {
    switch (actionType) {
      case 'page_visit': return 'bg-blue-100 text-blue-800';
      case 'user_login': return 'bg-green-100 text-green-800';
      case 'route_change': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType) {
      case 'mobile': return <Smartphone className="w-4 h-4" />;
      case 'tablet': return <Monitor className="w-4 h-4" />;
      default: return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" onClick={fetchLogs}>
          <Activity className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[800px] max-w-[90vw] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Logs de Acceso</SheetTitle>
          <SheetDescription>
            Rastreo detallado de accesos y actividad en la plataforma
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Total Visitas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalVisits}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">IPs Únicas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.uniqueIPs}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Países</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.countries}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Dispositivos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {Object.entries(stats.deviceTypes).map(([type, count]) => (
                    <div key={type} className="flex justify-between text-sm">
                      <span className="capitalize">{type}</span>
                      <span>{count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Logs List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Registros Recientes</h3>
              <Button size="sm" onClick={fetchLogs} disabled={loading}>
                {loading ? "Cargando..." : "Actualizar"}
              </Button>
            </div>
            
            <ScrollArea className="h-[500px]">
              <div className="space-y-3">
                {logs.map((log) => (
                  <Card key={log.id} className="p-4">
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge className={getActionColor(log.action_type)}>
                            {log.action_type}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {formatTimestamp(log.created_at)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {getDeviceIcon(log.device_type)}
                          <span className="text-sm font-medium">{log.ip_address}</span>
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-muted-foreground" />
                            <span>{log.user_id ? 'Usuario autenticado' : 'Anónimo'}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span>
                              {[log.city, log.region, log.country].filter(Boolean).join(', ') || 'Ubicación desconocida'}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Monitor className="w-4 h-4 text-muted-foreground" />
                            <span>{log.device_type} - {log.browser} ({log.os})</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-muted-foreground" />
                            <span className="truncate">{log.page_url}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4 text-muted-foreground" />
                            <span className="truncate">{log.referer || 'Acceso directo'}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span>{log.timezone}</span>
                          </div>
                        </div>
                      </div>

                      {/* Additional data */}
                      {log.additional_data && Object.keys(log.additional_data).length > 0 && (
                        <>
                          <Separator />
                          <div className="text-xs text-muted-foreground">
                            <strong>Datos adicionales:</strong>
                            <pre className="mt-1 whitespace-pre-wrap text-xs">
                              {JSON.stringify(log.additional_data, null, 2)}
                            </pre>
                          </div>
                        </>
                      )}
                    </div>
                  </Card>
                ))}
                
                {logs.length === 0 && !loading && (
                  <div className="text-center text-muted-foreground py-8">
                    No hay logs de acceso disponibles
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};