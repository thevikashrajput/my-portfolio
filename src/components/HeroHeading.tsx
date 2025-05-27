// components/HeroHeading.tsx
"use client";

import { motion } from "framer-motion";

const text = "Hi, I'm Vikash.";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: {
      duration: 0.4,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export default function HeroHeading() {
  return (
    <motion.h1
      className="
        text-center 
        text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
        font-extrabold tracking-tight leading-tight mb-8 
        bg-clip-text text-transparent 
        bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 
        animate-gradient-x
      "
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letter}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <span className="blinking-cursor" />
    </motion.h1>
  );
}
