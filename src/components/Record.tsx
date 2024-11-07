import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Corner } from "./Corner";

export function Record() {
  return (
    <Section>
      <div className="w-full lg:max-w-[100em] mx-auto flex flex-col gap-theme">
        <div className="relative bg-accent lg:rounded-bl-[24px] rounded-br-[24px] h-[75px] w-fit px-6 lg:px-0 lg:w-4/12 flex items-center justify-center ">
          <Corner
            dir="top-left"
            className="absolute top-0 left-0 -translate-x-full w-invert aspect-square"
          />

          <h3 className="text-leading opacity-[0.6]">Track Record</h3>

          <Corner
            dir="top-right"
            className="absolute top-0 right-0 translate-x-full w-invert aspect-square"
          />

          <Corner
            dir="top-right"
            className="block lg:hidden absolute top-full left-0 w-invert aspect-square"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-theme p-2">
          <Col>
            <Card
              className="bg-white"
              title="10K"
              subTitle="Businesses analyzed"
            />
            <Card
              className="bg-primary lg:aspect-[1.5]"
              title="100+"
              subTitle="Markets studied"
            />
          </Col>
          <Col className="lg:mt-20">
            <Card
              className="bg-accent text-primary"
              title="$50M+"
              subTitle="Raised"
            />
            <Card
              className="bg-white lg:aspect-[1.5]"
              title="700+"
              subTitle="Completed Projects"
            />
          </Col>
          <Col>
            <Card
              className="bg-primary lg:aspect-[1.5] justify-start"
              title="500+"
              subTitle="Clients"
            />
            <Card
              className="bg-accent text-primary lg:aspect-[1.5]"
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
      "rounded-theme text-accent min-h-[350px] w-full p-7 flex flex-col justify-end overflow-clip",
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
      viewport={{
        amount: "all",
        once: true,
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
    <div className={`w-full flex lg:flex-col gap-theme lg:w-4/12 ${className}`}>
      {children}
    </div>
  );
}
