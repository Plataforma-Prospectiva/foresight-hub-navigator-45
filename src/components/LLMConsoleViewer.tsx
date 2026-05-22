import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TerminalSquare, Copy, Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LLMCallTrace {
  id: string;
  timestamp: Date;
  endpoint: string;
  model: string;
  status: "pending" | "success" | "error";
  httpStatus?: number;
  elapsedMs?: number;
  request: unknown;
  response?: unknown;
  error?: string;
  usage?: { prompt_tokens?: number; completion_tokens?: number; total_tokens?: number } | null;
}

interface LLMConsoleViewerProps {
  traces: LLMCallTrace[];
}

const pretty = (v: unknown) => {
  try {
    return typeof v === "string" ? v : JSON.stringify(v, null, 2);
  } catch {
    return String(v);
  }
};

const StatusDot = ({ status }: { status: LLMCallTrace["status"] }) => (
  <span
    className={cn(
      "inline-block w-2 h-2 rounded-full",
      status === "pending" && "bg-yellow-400 animate-pulse",
      status === "success" && "bg-emerald-400",
      status === "error" && "bg-red-500",
    )}
  />
);

const CodeBlock = ({ label, content }: { label: string; content: string }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="rounded-md border border-emerald-500/20 bg-black/60">
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-emerald-500/20">
        <span className="text-[10px] uppercase tracking-wider text-emerald-300/70">{label}</span>
        <Button
          variant="ghost"
          size="sm"
          className="h-6 px-2 text-emerald-300 hover:text-emerald-100 hover:bg-emerald-500/10"
          onClick={() => {
            navigator.clipboard.writeText(content);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
        </Button>
      </div>
      <pre className="p-3 text-[11px] leading-relaxed text-emerald-200 overflow-x-auto whitespace-pre">
        {content}
      </pre>
    </div>
  );
};

const TraceItem = ({ trace, defaultOpen }: { trace: LLMCallTrace; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="border border-emerald-500/20 rounded-lg overflow-hidden bg-black/40">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-2 px-3 py-2 text-left hover:bg-emerald-500/5"
      >
        <div className="flex items-center gap-2 min-w-0">
          <StatusDot status={trace.status} />
          <span className="text-emerald-300 text-xs font-mono">
            POST {trace.endpoint}
          </span>
          <Badge variant="outline" className="border-emerald-500/30 text-emerald-200 text-[10px]">
            {trace.model}
          </Badge>
          {trace.httpStatus && (
            <Badge
              variant="outline"
              className={cn(
                "text-[10px] border-emerald-500/30",
                trace.status === "error" ? "text-red-300 border-red-500/40" : "text-emerald-200",
              )}
            >
              {trace.httpStatus}
            </Badge>
          )}
          {trace.elapsedMs !== undefined && (
            <span className="text-emerald-400/60 text-[10px]">{trace.elapsedMs} ms</span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-emerald-400/60 text-[10px] font-mono">
            {trace.timestamp.toLocaleTimeString("es-ES", { hour12: false })}
          </span>
          {open ? (
            <ChevronUp className="w-4 h-4 text-emerald-300" />
          ) : (
            <ChevronDown className="w-4 h-4 text-emerald-300" />
          )}
        </div>
      </button>
      {open && (
        <div className="p-3 space-y-3 border-t border-emerald-500/20">
          <CodeBlock label="request payload" content={pretty(trace.request)} />
          {trace.error && (
            <CodeBlock label="error" content={trace.error} />
          )}
          {trace.response !== undefined && (
            <CodeBlock label="response" content={pretty(trace.response)} />
          )}
          {trace.usage && (
            <div className="text-[11px] text-emerald-300/80 font-mono">
              tokens · prompt {trace.usage.prompt_tokens ?? "?"} · completion {trace.usage.completion_tokens ?? "?"} · total {trace.usage.total_tokens ?? "?"}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const LLMConsoleViewer = ({ traces }: LLMConsoleViewerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [traces]);

  return (
    <Card className="border-emerald-500/30 bg-zinc-950">
      <CardHeader className="pb-3 border-b border-emerald-500/20">
        <CardTitle className="flex items-center justify-between text-base text-emerald-300 font-mono">
          <span className="flex items-center gap-2">
            <TerminalSquare className="w-4 h-4" />
            LLM · Consola de llamadas
          </span>
          <Badge variant="outline" className="border-emerald-500/30 text-emerald-200 text-[10px]">
            {traces.length} {traces.length === 1 ? "llamada" : "llamadas"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-3">
        <ScrollArea className="h-[360px] pr-3" ref={scrollRef}>
          {traces.length === 0 ? (
            <div className="text-emerald-300/50 text-xs font-mono py-8 text-center">
              $ esperando llamada al modelo...
            </div>
          ) : (
            <div className="space-y-2">
              {traces.map((t, i) => (
                <TraceItem key={t.id} trace={t} defaultOpen={i === traces.length - 1} />
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
