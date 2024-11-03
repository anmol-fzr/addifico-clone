import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export function Section(props: SectionProps) {
  return (
    <div className="p-theme min-h-screen w-full relative">
      <section className="bg-primary-muted rounded-theme h-full w-full pb-20">
        {props.children}
      </section>
    </div>
  );
}
