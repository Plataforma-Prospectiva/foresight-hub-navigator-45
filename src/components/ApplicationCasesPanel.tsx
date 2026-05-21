import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { useTechniques } from "@/context/TechniqueContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Plus, Search, Check, X, Loader2, MapPin, Calendar, Target, Lightbulb, BookOpen } from "lucide-react";

type CaseStatus = "pending" | "approved" | "rejected";

interface CaseTechnique {
  id: string;
  technique_id: string;
  sequence_order: number;
  combination_notes: string | null;
}

interface ApplicationCase {
  id: string;
  title: string;
  context: string | null;
  sector: string | null;
  country: string | null;
  organization: string | null;
  year: number | null;
  objective: string | null;
  description: string | null;
  methodology_summary: string | null;
  results: string | null;
  lessons_learned: string | null;
  references_text: string | null;
  language: string;
  status: CaseStatus;
  submitted_by: string | null;
  created_at: string;
  application_case_techniques: CaseTechnique[];
}

const emptyForm = {
  title: "",
  sector: "",
  country: "",
  organization: "",
  year: "",
  context: "",
  objective: "",
  description: "",
  methodology_summary: "",
  results: "",
  lessons_learned: "",
  references_text: "",
  techniques: [] as { technique_id: string; sequence_order: number; combination_notes: string }[],
};

export const ApplicationCasesPanel = () => {
  const { user } = useAuth();
  const { techniques } = useTechniques();
  const { toast } = useToast();
  const isAdmin = user?.role === "admin";

  const [cases, setCases] = useState<ApplicationCase[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sectorFilter, setSectorFilter] = useState("all");
  const [statusTab, setStatusTab] = useState<"approved" | "pending" | "mine">("approved");
  const [openSubmit, setOpenSubmit] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [selectedCase, setSelectedCase] = useState<ApplicationCase | null>(null);

  const techniqueNameMap = useMemo(() => {
    const m: Record<string, string> = {};
    techniques.forEach((t: any) => { m[t.id] = t.name; });
    return m;
  }, [techniques]);

  const fetchCases = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("application_cases")
      .select("*, application_case_techniques(*)")
      .order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setCases((data || []) as any);
    }
    setLoading(false);
  };

  useEffect(() => { fetchCases(); }, []);

  const filtered = cases.filter((c) => {
    if (statusTab === "approved" && c.status !== "approved") return false;
    if (statusTab === "pending" && c.status !== "pending") return false;
    if (statusTab === "mine" && c.submitted_by !== user?.id) return false;
    if (sectorFilter !== "all" && c.sector !== sectorFilter) return false;
    const q = search.toLowerCase();
    if (!q) return true;
    return (
      c.title.toLowerCase().includes(q) ||
      (c.sector || "").toLowerCase().includes(q) ||
      (c.country || "").toLowerCase().includes(q) ||
      (c.description || "").toLowerCase().includes(q)
    );
  });

  const sectors = Array.from(new Set(cases.map((c) => c.sector).filter(Boolean))) as string[];

  const resetForm = () => setForm(emptyForm);

  const submitCase = async () => {
    if (!user) {
      toast({ title: "Inicia sesión", description: "Debes iniciar sesión para proponer un caso.", variant: "destructive" });
      return;
    }
    if (!form.title.trim()) {
      toast({ title: "Falta el título", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const { data, error } = await supabase
        .from("application_cases")
        .insert({
          title: form.title,
          sector: form.sector || null,
          country: form.country || null,
          organization: form.organization || null,
          year: form.year ? parseInt(form.year) : null,
          context: form.context || null,
          objective: form.objective || null,
          description: form.description || null,
          methodology_summary: form.methodology_summary || null,
          results: form.results || null,
          lessons_learned: form.lessons_learned || null,
          references_text: form.references_text || null,
          submitted_by: user.id,
          status: "pending",
        })
        .select()
        .single();
      if (error) throw error;
      if (form.techniques.length > 0) {
        const { error: tErr } = await supabase.from("application_case_techniques").insert(
          form.techniques.map((t) => ({ ...t, case_id: data.id }))
        );
        if (tErr) throw tErr;
      }
      toast({ title: "Caso enviado", description: "Quedará pendiente de aprobación por un administrador." });
      resetForm();
      setOpenSubmit(false);
      fetchCases();
    } catch (e: any) {
      toast({ title: "Error", description: e.message, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const moderate = async (caseId: string, status: CaseStatus) => {
    const { error } = await supabase
      .from("application_cases")
      .update({ status, reviewed_at: new Date().toISOString(), reviewed_by: user?.id })
      .eq("id", caseId);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: status === "approved" ? "Caso aprobado" : "Caso rechazado" });
      fetchCases();
    }
  };

  const addTechniqueToForm = (technique_id: string) => {
    if (form.techniques.some((t) => t.technique_id === technique_id)) return;
    setForm({
      ...form,
      techniques: [
        ...form.techniques,
        { technique_id, sequence_order: form.techniques.length + 1, combination_notes: "" },
      ],
    });
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Casos de Aplicación Práctica
              </CardTitle>
              <CardDescription>
                Biblioteca de casos reales que combinan técnicas prospectivas, como base para configurar tus propias metodologías.
              </CardDescription>
            </div>
            <Dialog open={openSubmit} onOpenChange={setOpenSubmit}>
              <DialogTrigger asChild>
                <Button disabled={!user}>
                  <Plus className="w-4 h-4 mr-2" />
                  Proponer caso
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Proponer un caso de aplicación</DialogTitle>
                  <DialogDescription>
                    Será revisado por un administrador antes de publicarse.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-2">
                      <Label>Título *</Label>
                      <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
                    </div>
                    <div>
                      <Label>Sector</Label>
                      <Input value={form.sector} onChange={(e) => setForm({ ...form, sector: e.target.value })} />
                    </div>
                    <div>
                      <Label>País</Label>
                      <Input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
                    </div>
                    <div>
                      <Label>Organización</Label>
                      <Input value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} />
                    </div>
                    <div>
                      <Label>Año</Label>
                      <Input type="number" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <Label>Contexto</Label>
                    <Textarea rows={2} value={form.context} onChange={(e) => setForm({ ...form, context: e.target.value })} />
                  </div>
                  <div>
                    <Label>Objetivo</Label>
                    <Textarea rows={2} value={form.objective} onChange={(e) => setForm({ ...form, objective: e.target.value })} />
                  </div>
                  <div>
                    <Label>Descripción del proceso</Label>
                    <Textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                  </div>
                  <div>
                    <Label>Resumen de la combinación metodológica</Label>
                    <Textarea rows={2} value={form.methodology_summary} onChange={(e) => setForm({ ...form, methodology_summary: e.target.value })} />
                  </div>
                  <div>
                    <Label>Resultados</Label>
                    <Textarea rows={2} value={form.results} onChange={(e) => setForm({ ...form, results: e.target.value })} />
                  </div>
                  <div>
                    <Label>Lecciones aprendidas</Label>
                    <Textarea rows={2} value={form.lessons_learned} onChange={(e) => setForm({ ...form, lessons_learned: e.target.value })} />
                  </div>
                  <div>
                    <Label>Referencias</Label>
                    <Textarea rows={2} value={form.references_text} onChange={(e) => setForm({ ...form, references_text: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Técnicas utilizadas (en orden de aplicación)</Label>
                    <Select onValueChange={addTechniqueToForm}>
                      <SelectTrigger><SelectValue placeholder="Agregar técnica..." /></SelectTrigger>
                      <SelectContent>
                        {techniques.map((t: any) => (
                          <SelectItem key={t.id} value={t.id}>{t.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="space-y-2">
                      {form.techniques.map((t, idx) => (
                        <div key={t.technique_id} className="border rounded p-2 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{idx + 1}. {techniqueNameMap[t.technique_id] || t.technique_id}</span>
                            <Button variant="ghost" size="sm" onClick={() => setForm({ ...form, techniques: form.techniques.filter(x => x.technique_id !== t.technique_id) })}>
                              <X className="w-3 h-3" />
                            </Button>
                          </div>
                          <Input
                            placeholder="¿Cómo se combinó esta técnica?"
                            value={t.combination_notes}
                            onChange={(e) => {
                              const copy = [...form.techniques];
                              copy[idx] = { ...t, combination_notes: e.target.value };
                              setForm({ ...form, techniques: copy });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setOpenSubmit(false)}>Cancelar</Button>
                  <Button onClick={submitCase} disabled={submitting}>
                    {submitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                    Enviar caso
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 flex-wrap items-center">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="Buscar casos..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <Select value={sectorFilter} onValueChange={setSectorFilter}>
              <SelectTrigger className="w-[200px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los sectores</SelectItem>
                {sectors.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <Tabs value={statusTab} onValueChange={(v) => setStatusTab(v as any)}>
            <TabsList>
              <TabsTrigger value="approved">Aprobados</TabsTrigger>
              {isAdmin && <TabsTrigger value="pending">Pendientes</TabsTrigger>}
              {user && <TabsTrigger value="mine">Mis casos</TabsTrigger>}
            </TabsList>
            <TabsContent value={statusTab} className="mt-4">
              {loading ? (
                <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin" /></div>
              ) : filtered.length === 0 ? (
                <p className="text-center text-muted-foreground py-12">No hay casos para mostrar.</p>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {filtered.map((c) => (
                    <Card key={c.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedCase(c)}>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-base">{c.title}</CardTitle>
                          {c.status === "pending" && <Badge variant="outline">Pendiente</Badge>}
                          {c.status === "rejected" && <Badge variant="destructive">Rechazado</Badge>}
                        </div>
                        <CardDescription className="flex gap-3 flex-wrap text-xs">
                          {c.sector && <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{c.sector}</span>}
                          {c.country && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{c.country}</span>}
                          {c.year && <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{c.year}</span>}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-sm text-muted-foreground line-clamp-2">{c.context || c.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {c.application_case_techniques
                            .sort((a, b) => a.sequence_order - b.sequence_order)
                            .slice(0, 5)
                            .map((t) => (
                              <Badge key={t.id} variant="secondary" className="text-xs">
                                {techniqueNameMap[t.technique_id] || t.technique_id}
                              </Badge>
                            ))}
                          {c.application_case_techniques.length > 5 && (
                            <Badge variant="outline" className="text-xs">+{c.application_case_techniques.length - 5}</Badge>
                          )}
                        </div>
                        {isAdmin && c.status === "pending" && (
                          <div className="flex gap-2 pt-2" onClick={(e) => e.stopPropagation()}>
                            <Button size="sm" onClick={() => moderate(c.id, "approved")}>
                              <Check className="w-3 h-3 mr-1" /> Aprobar
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => moderate(c.id, "rejected")}>
                              <X className="w-3 h-3 mr-1" /> Rechazar
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Dialog open={!!selectedCase} onOpenChange={(o) => !o && setSelectedCase(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedCase && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedCase.title}</DialogTitle>
                <DialogDescription className="flex gap-3 flex-wrap pt-1">
                  {selectedCase.sector && <Badge variant="outline">{selectedCase.sector}</Badge>}
                  {selectedCase.country && <Badge variant="outline"><MapPin className="w-3 h-3 mr-1" />{selectedCase.country}</Badge>}
                  {selectedCase.organization && <Badge variant="outline">{selectedCase.organization}</Badge>}
                  {selectedCase.year && <Badge variant="outline">{selectedCase.year}</Badge>}
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="max-h-[60vh] pr-3">
                <div className="space-y-4 text-sm">
                  {selectedCase.context && <Section icon={<BookOpen className="w-4 h-4" />} title="Contexto">{selectedCase.context}</Section>}
                  {selectedCase.objective && <Section icon={<Target className="w-4 h-4" />} title="Objetivo">{selectedCase.objective}</Section>}
                  {selectedCase.description && <Section title="Descripción del proceso">{selectedCase.description}</Section>}
                  {selectedCase.methodology_summary && <Section title="Combinación metodológica">{selectedCase.methodology_summary}</Section>}
                  <div>
                    <h4 className="font-semibold mb-2">Secuencia de técnicas</h4>
                    <div className="space-y-2">
                      {selectedCase.application_case_techniques
                        .sort((a, b) => a.sequence_order - b.sequence_order)
                        .map((t) => (
                          <div key={t.id} className="border rounded p-2">
                            <div className="font-medium">{t.sequence_order}. {techniqueNameMap[t.technique_id] || t.technique_id}</div>
                            {t.combination_notes && <div className="text-muted-foreground text-xs mt-1">{t.combination_notes}</div>}
                          </div>
                        ))}
                    </div>
                  </div>
                  {selectedCase.results && <Section title="Resultados">{selectedCase.results}</Section>}
                  {selectedCase.lessons_learned && <Section icon={<Lightbulb className="w-4 h-4" />} title="Lecciones aprendidas">{selectedCase.lessons_learned}</Section>}
                  {selectedCase.references_text && <Section title="Referencias">{selectedCase.references_text}</Section>}
                </div>
              </ScrollArea>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const Section = ({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) => (
  <div>
    <h4 className="font-semibold mb-1 flex items-center gap-2">{icon}{title}</h4>
    <p className="text-muted-foreground whitespace-pre-wrap">{children}</p>
  </div>
);
