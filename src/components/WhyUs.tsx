import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

const qas = [
  {
    question: "results driven",
    answer: "Delivering actionable insights with measurable RoI",
  },
  {
    question: "cost effective value-add",
    answer:
      "Get 80% of the value of traditional research and analysis for 20% of the cost",
  },
  {
    question: "tech driver creativity",
    answer:
      "Methodologies inspired by human creativity and empowered by technology",
  },
  {
    question: "industry agnostic expertise",
    answer: "Hundreds of completed projects across all sectors and verticals",
  },
];

export function WhyUs() {
  const [isOpen, setIsOpen] = useState(false);
  console.log({ isOpen });

  return (
    <section className="min-h-screen p-theme">
      <div className="p-24">
        <div className="w-full max-w-[100em] mx-auto flex justify-between">
          <div className="w-full">
            <p className="sticky-heading text-body opacity-7 sticky top-[6em]">
              Why us?
            </p>
          </div>
          <div className="w-full">
            <ul>
              {qas.map(({ question, answer }) => (
                <Accordion key={question} {...{ question, answer }} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

type AccordionProps = {
  question: string;
  answer: string;
};

function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li role="listitem">
      <div className="w-full space-x-[0.5em] space-y-[0.5em] cursor-pointer relative pr-[6em] pt-[3em] pb-[2.5em]">
        <div className="h-seperator bg-primary opacity-1 absolute inset-0 bottom-auto" />
        <div
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="w-full overflow-hidden py-[0.2em] flex items-start justify-between "
        >
          <h3
            className={` ${isOpen ? "text-primary" : ""} text-[2.63em] capitalize  hover:opacity-4 transition-theme`}
          >
            {question}
          </h3>
        </div>
        <motion.div
          className="text-body letter-spacing-0-5 is-bigger opacity-4 overflow-hidden"
          initial={{ height: 9 }}
          animate={{ height: isOpen ? 60 : 0 }}
        >
          {answer}
        </motion.div>
      </div>
    </li>
  );
}
