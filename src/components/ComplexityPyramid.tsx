import { Card, CardContent } from "@/components/ui/card";
interface ComplexityPyramidProps {
  basicCount: number;
  intermediateCount: number;
  advancedCount: number;
}
export const ComplexityPyramid = ({
  basicCount,
  intermediateCount,
  advancedCount
}: ComplexityPyramidProps) => {
  const total = basicCount + intermediateCount + advancedCount;
  return;
};