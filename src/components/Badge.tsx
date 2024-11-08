import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="bg-primary-muted/50 text-accent/7 text-[.9em] py-[.5em] px-[1.2em] rounded-full font-medium">
      {children}
    </span>
  );
}
