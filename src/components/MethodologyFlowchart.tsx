import { useEffect, useRef } from "react";
import * as go from "gojs";
import { Technique } from "@/types/technique";

interface MethodologyFlowchartProps {
  techniques: Technique[];
  recommendations: { techniqueId: string; justification: string; sequenceOrder: number }[];
}

export const MethodologyFlowchart = ({ techniques, recommendations }: MethodologyFlowchartProps) => {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!diagramRef.current) return;

    const $ = go.GraphObject.make;

    const diagram = $(go.Diagram, diagramRef.current, {
      "undoManager.isEnabled": true,
      layout: $(go.TreeLayout, {
        angle: 90,
        layerSpacing: 80,
        nodeSpacing: 40,
        arrangement: go.TreeArrangement.Horizontal,
      }),
    });

    // Define node template
    diagram.nodeTemplate = $(
      go.Node,
      "Auto",
      $(
        go.Shape,
        "RoundedRectangle",
        { strokeWidth: 2, fill: "white" },
        new go.Binding("fill", "color"),
        new go.Binding("stroke", "strokeColor")
      ),
      $(
        go.Panel,
        "Vertical",
        { margin: 12 },
        $(
          go.TextBlock,
          {
            font: "bold 14px sans-serif",
            margin: new go.Margin(4, 4, 2, 4),
            maxSize: new go.Size(200, NaN),
            wrap: go.Wrap.Fit,
            textAlign: "center",
          },
          new go.Binding("text", "name")
        ),
        $(
          go.TextBlock,
          {
            font: "11px sans-serif",
            margin: new go.Margin(2, 4, 4, 4),
            maxSize: new go.Size(200, NaN),
            wrap: go.Wrap.Fit,
            textAlign: "center",
            stroke: "#666",
          },
          new go.Binding("text", "phase")
        )
      )
    );

    // Define link template
    diagram.linkTemplate = $(
      go.Link,
      {
        routing: go.Routing.Orthogonal,
        corner: 5,
        curve: go.Curve.JumpOver,
      },
      $(go.Shape, { strokeWidth: 2, stroke: "#4F46E5" }),
      $(go.Shape, { toArrow: "Standard", stroke: "#4F46E5", fill: "#4F46E5" }),
      $(
        go.TextBlock,
        {
          segmentOffset: new go.Point(0, -10),
          segmentOrientation: go.Orientation.Upright,
          font: "10px sans-serif",
          stroke: "#666",
          background: "white",
        },
        new go.Binding("text", "label")
      )
    );

    // Prepare data
    const sortedRecommendations = [...recommendations].sort(
      (a, b) => a.sequenceOrder - b.sequenceOrder
    );

    const getPhaseColor = (order: number) => {
      const colors = [
        { fill: "#DBEAFE", stroke: "#3B82F6" }, // blue
        { fill: "#D1FAE5", stroke: "#10B981" }, // green
        { fill: "#FEF3C7", stroke: "#F59E0B" }, // yellow
        { fill: "#E9D5FF", stroke: "#A855F7" }, // purple
        { fill: "#FECACA", stroke: "#EF4444" }, // red
      ];
      return colors[(order - 1) % colors.length];
    };

    const getPhaseLabel = (order: number) => {
      const phases = ["Exploración", "Estructuración", "Participación", "Validación", "Síntesis"];
      return `Fase ${order}: ${phases[(order - 1) % phases.length]}`;
    };

    const nodeDataArray = sortedRecommendations.map((rec, index) => {
      const technique = techniques.find((t) => t.id === rec.techniqueId);
      const colors = getPhaseColor(rec.sequenceOrder);
      return {
        key: rec.techniqueId,
        name: technique?.name || "Técnica desconocida",
        phase: getPhaseLabel(rec.sequenceOrder),
        color: colors.fill,
        strokeColor: colors.stroke,
        order: rec.sequenceOrder,
      };
    });

    const linkDataArray = sortedRecommendations.slice(0, -1).map((rec, index) => ({
      from: rec.techniqueId,
      to: sortedRecommendations[index + 1].techniqueId,
      label: `→`,
    }));

    // Add start and end nodes
    const startNode = {
      key: "start",
      name: "Inicio del Estudio",
      phase: "Preparación",
      color: "#F3F4F6",
      strokeColor: "#6B7280",
      order: 0,
    };

    const endNode = {
      key: "end",
      name: "Informe Final",
      phase: "Entrega",
      color: "#F3F4F6",
      strokeColor: "#6B7280",
      order: sortedRecommendations.length + 1,
    };

    const fullNodeDataArray = [startNode, ...nodeDataArray, endNode];

    const startLink = {
      from: "start",
      to: sortedRecommendations[0]?.techniqueId,
      label: "Iniciar",
    };

    const endLink = {
      from: sortedRecommendations[sortedRecommendations.length - 1]?.techniqueId,
      to: "end",
      label: "Finalizar",
    };

    const fullLinkDataArray = [startLink, ...linkDataArray, endLink];

    diagram.model = new go.GraphLinksModel(fullNodeDataArray, fullLinkDataArray);

    return () => {
      diagram.div = null;
    };
  }, [techniques, recommendations]);

  return (
    <div
      ref={diagramRef}
      style={{
        width: "100%",
        height: "500px",
        backgroundColor: "#FAFAFA",
        border: "1px solid #E5E7EB",
        borderRadius: "8px",
      }}
    />
  );
};
