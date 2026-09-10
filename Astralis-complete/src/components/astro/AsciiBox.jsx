import { cn } from "../../lib/utils";
export default function AsciiBox({title,glyph="✦",children,className,bodyClassName}) {
  const rule="─".repeat(48);
  return <div className={cn("relative",className)}>
    <div className="ascii-frame flex items-center overflow-hidden text-fuchsia/60 text-[10px] sm:text-xs">
      <span>╭</span><span className="flex-1">{rule}</span><span className="px-2 uv-text tracking-[.2em]">{glyph} {title.toUpperCase()} {glyph}</span><span className="flex-1">{rule}</span><span>╮</span>
    </div>
    <div className={cn("px-4 py-5 sm:px-7 sm:py-6 border-x border-fuchsia/20",bodyClassName)}>{children}</div>
    <div className="ascii-frame flex items-center text-fuchsia/60 text-[10px] sm:text-xs">
      <span>╰</span><span className="flex-1">{rule.repeat(2)}</span><span>╯</span>
    </div>
  </div>;
}