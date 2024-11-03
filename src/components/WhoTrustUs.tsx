import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Section } from "./Section";

const comps = [
  "Microsoft",
  "indeed",
  "upwork",
  "fiverr",
  "ansell",
  "tipalti",
  "estrid",
  "imaginario",
  "presido",
  "wedo",
];

export function WhoTrustUs() {
  return (
    <Section>
      <div className="grid grid-cols-3">
        <div className="col-span-2 p-4">
          <p className="text-accent opacity-[0.6]">Who trusts us?</p>
        </div>
        {comps.map((comp) => (
          <div key={comp} className="bg-black/25">
            {comp}
          </div>
        ))}
      </div>
    </Section>
  );
}
