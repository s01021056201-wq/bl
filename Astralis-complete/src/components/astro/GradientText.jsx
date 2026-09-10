import { cn } from "../../lib/utils";
export default function GradientText({children,className,as:Tag="span"}) {
  return <Tag className={cn("uv-text uv-glow",className)}>{children}</Tag>;
}