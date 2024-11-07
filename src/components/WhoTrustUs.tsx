import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Indeed } from "@/icons/logo";

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
    <div className="p-theme min-h-screen w-full relative">
      <section className="bg-primary-muted rounded-theme h-full w-full">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ~gap-2/4 ~p-2/4">
          <div className="col-span-2 p-4 border border-black/[0.1] rounded-2xl">
            <h4 className="text-accent opacity-[0.6] font-bold">
              Who trusts us?
            </h4>
          </div>
          {comps.map((comp, i) =>
            comp ? (
              <div
                key={`${comp}-${i}`}
                className={`bg-black/[0.1] hover:bg-white/[0.4] text-accent w-full h-full aspect-square max-h-[250px] flex justify-center items-center rounded-xl group transition-theme`}
              >
                <div className="max-w-[125px] group-hover:text-[#003A9B] transition-theme">
                  <Indeed />
                </div>
              </div>
            ) : (
              <div
                key={`${comp}-${i}`}
                className={` text-accent w-full h-full aspect-square max-h-[250px] flex justify-center items-center rounded-xl group transition-theme`}
              ></div>
            ),
          )}
        </div>
      </section>
    </div>
  );
}
