import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const k = ["analyze", "build", "grow"];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each word animation
    },
  },
};
const wordVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
export const Loader = (props: {}) => {
  return (
    <div className="p-theme h-screen">
      <div className="bg-primary h-full rounded-3xl flex items-center justify-center text-[3em]">
        <div className="flex items-center gap-4 overflow-hidden bg-red-300 h-12">
          <p className="text-primary-muted font-semibold mix-">we</p>
          <motion.div variants={container} initial="hidden" animate="visible">
            {k.map((word) => (
              <motion.p
                className="text-accent"
                variants={wordVariants}
                transition={{ duration: 0.5 }}
                initial="hidden"
                animate="visible"
              >
                {word}
              </motion.p>
            ))}
          </motion.div>
          <WordAnimation />
        </div>
      </div>
    </div>
  );
};

const WordAnimation = () => {
  const words = ["Hello", "World", "React"];
  const [index, setIndex] = useState(0);

  // Cycle through words by updating the index
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        return (prevIndex + 1) % words.length;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white text-4xl font-bold overflow-hidden">
      <motion.div
        key={index} // Key helps Framer Motion identify changes
        className="absolute"
        initial={{ y: 30, opacity: 0.8 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {words[index]}
      </motion.div>
    </div>
  );
};
