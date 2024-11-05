import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Corner } from "./Corner";

export function Record() {
  return (
    <Section>
      <div className="w-full max-w-[100em] mx-auto flex flex-col gap-theme">
        <div className="relative bg-accent rounded-b-[24px] h-[75px] w-4/12 flex items-center justify-center ">
          <Corner
            dir="top-left"
            className="absolute top-0 left-0 -translate-x-full w-invert aspect-square"
          />

          <h3 className="text-leading opacity-[0.6]">Track Record</h3>

          <Corner
            dir="top-right"
            className="absolute top-0 right-0 translate-x-full w-invert aspect-square"
          />
        </div>
        <div className="w-full flex gap-theme">
          <Col>
            <Card
              className="bg-white"
              title="10K"
              subTitle="Businesses analyzed"
            />
            <Card
              className="bg-primary aspect-[1.5]"
              title="100+"
              subTitle="Markets studied"
            />
          </Col>
          <Col className="mt-20">
            <Card
              className="bg-accent text-primary"
              title="$50M+"
              subTitle="Raised"
            />
            <Card
              className="bg-white aspect-[1.5]"
              title="700+"
              subTitle="Completed Projects"
            />
          </Col>
          <Col>
            <Card
              className="bg-primary aspect-[1.5] justify-start"
              title="500+"
              subTitle="Clients"
            />
            <Card
              className="bg-accent text-primary aspect-[1.5]"
              title="4.9/5"
              subTitle="Average customer rating"
            />
          </Col>
        </div>
      </div>
    </Section>
  );
}

type CardProps = ComponentPropsWithoutRef<"div"> & {
  title: string;
  subTitle: string;
};

const Card = ({ title, subTitle, ...props }: CardProps) => (
  <div
    className={twMerge(
      "rounded-theme text-accent aspect-[1.25] p-7 flex flex-col justify-end overflow-clip",
      props.className,
    )}
  >
    <motion.h2
      initial={{
        y: 120,
      }}
      animate={{
        y: 0,
      }}
      className="font-semibold"
    >
      {title}
    </motion.h2>
    <p className="text-body opacity-[0.6]">{subTitle}</p>
  </div>
);

function Col({ children, className = "" }) {
  return (
    <div className={`w-full flex flex-col gap-theme w-4/12 ${className}`}>
      {children}
    </div>
  );
}
