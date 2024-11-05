import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Section } from "./Section";

const comps = [
  "Microsoft",
  "indeed",
  "upwork",
  "",
  "fiverr",
  "",
  "ansell",
  "tipalti",
  "estrid",
  "imaginario",
  "",
  "presido",
  "",
  "wedo",
];

export function WhoTrustUs() {
  return (
    <Section>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-2">
        <div className="col-span-2 p-4 border border-black/[0.1] rounded-2xl">
          <h4 className="text-accent opacity-[0.6] font-bold">
            Who trusts us?
          </h4>
        </div>
        {comps.map((comp) => (
          <div
            key={comp}
            className={` ${comp ? "bg-black/[0.1]" : ""} text-accent w-full aspect-square flex justify-center items-center rounded-xl`}
          >
            {comp}
          </div>
        ))}
      </div>
    </Section>
  );
}
