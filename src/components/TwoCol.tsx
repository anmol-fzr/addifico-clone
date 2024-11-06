import { ReactNode } from "react";

type TwoColProps = {
  children: ReactNode;
  heading: string;
};

export function TwoCol(props: TwoColProps) {
  const { heading, children } = props;
  return (
    <section className="min-h-screen p-theme">
      <div></div>
      <div className="p-24">
        <div className="w-full max-w-[100em] mx-auto flex justify-between">
          <div className="w-full">
            <p className="sticky-heading text-body opacity-7 sticky top-[6em]">
              {heading}
            </p>
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </section>
  );
}
