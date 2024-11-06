import { ReactNode, forwardRef } from "react";

type SectionProps = {
  children: ReactNode;
};

const Section = forwardRef<HTMLDivElement, SectionProps>((props, ref) => {
  return (
    <div ref={ref} className="min-h-screen w-full relative">
      <section className="bg-primary-muted rounded-theme h-full w-full pb-20">
        {props.children}
      </section>
    </div>
  );
});

export { Section };
