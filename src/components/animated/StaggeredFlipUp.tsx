import { cn } from "@/utils";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { jsx } from "react/jsx-runtime";
import React, { ReactHTML } from "react";

const DURATION = 0.2;
const STAGGER = 0.05;

type FlipLinkProps<T extends keyof ReactHTML> = Omit<
  HTMLMotionProps<T>,
  "children"
> & {
  title: string | string[];
  as?: T;
};

export function StaggeredFlipUp<T extends keyof ReactHTML>({
  title,
  as = "div" as T,
  ...props
}: FlipLinkProps<T>) {
  const textArray = Array.isArray(title) ? title : [title];
  const Wrapper = (motion as any)[as];
  return (
    <Wrapper
      initial="initial"
      whileHover="hovered"
      {...props}
      className={cn(
        "relative block overflow-hidden whitespace-nowrap text-primary-muted ~text-[20px]/[1.25em] ",
        props.className,
      )}
    >
      <div>
        <Flipper textArray={textArray} yInit={0} yHovered="-100%" />
      </div>
      <div className="absolute inset-0">
        <Flipper textArray={textArray} yInit="100%" yHovered={0} />
      </div>
    </Wrapper>
  );
}

type FlipperProps = {
  textArray: string[];
  // pick these types from framer-motion
  yInit: string | number;
  yHovered: string | number;
};

const Flipper = ({ textArray, yInit, yHovered }: FlipperProps) => (
  <>
    {textArray.map((line, lineIndex) => (
      <span className="inline-block" key={`${line}-${lineIndex}`}>
        {line.split(" ").map((word, wordIndex) => (
          <span className="inline-block" key={`${word}-${wordIndex}`}>
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`${char}-${charIndex}`}
                variants={{
                  initial: {
                    y: yInit,
                  },
                  hovered: {
                    y: yHovered,
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * wordIndex + lineIndex,
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </span>
    ))}
  </>
);
