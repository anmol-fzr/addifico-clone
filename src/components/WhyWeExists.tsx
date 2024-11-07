import { TwoCol } from "./TwoCol";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const para =
  "At Addifico Consulting, we use human creativity and the latest technologies to help business leaders, investors, and entrepreneurs enhance their market positioning, discover the next winning trend, and optimize their chances for success.";

export function WhyWeExists() {
  return (
    <TwoCol heading="Why we exist?">
      <SplittedText text={para} />
    </TwoCol>
  );
}

type SplittedTextProps = {
  text: string;
};

function SplittedText({ text }: SplittedTextProps) {
  const elem = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: elem,
    offset: ["start 0.65", "start 0.4"],
  });

  const words = text.split(" ");

  return (
    <>
      <p className="sr-only">{text}</p>
      <p
        ref={elem}
        aria-hidden
        className="text-[32px] lg:text-large w-full lg:w-11/12 leading-tight"
        id="why_we_exists_desc"
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word
              key={`word_${word}-${i}`}
              text={word}
              range={[start, end]}
              progress={scrollYProgress}
            />
          );
        })}
      </p>
    </>
  );
}

type WordProps = {
  text: string;
  range: [number, number];
  progress: MotionValue<number>;
};

function Word({ text, range, progress }: WordProps) {
  const chars = text.split("");
  const amnt = range[1] - range[0];
  const step = amnt / text.length;

  return (
    <span>
      {chars.map((char, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character
            text={char}
            key={`char_${char}-${i}`}
            progress={progress}
            range={[start, end]}
          />
        );
      })}
      <span className="inline-block">&nbsp;</span>
    </span>
  );
}

type CharacterProps = WordProps;

function Character({ text, range, progress }: CharacterProps) {
  const opacity = useTransform(progress, range, [0.15, 0.9]);
  return (
    <span>
      <motion.span className="text-primary-muted" style={{ opacity }}>
        {text}
      </motion.span>
    </span>
  );
}
