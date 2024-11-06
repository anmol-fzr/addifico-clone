import { cn } from "@/utils";
import { ComponentPropsWithoutRef } from "react";

type SeparatorProps = ComponentPropsWithoutRef<"div">;

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <div {...props} className={cn("h-[1px] bg-primary opacity-1", className)} />
  );
}
