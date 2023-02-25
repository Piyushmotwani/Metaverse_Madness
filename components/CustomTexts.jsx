"use client";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";
export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={` font-normal text-[14px] ${textStyles}  text-secondary-white`}
  >
    {Array.from(title).map((char, index) => (
      <motion.span variants={textVariant2} key={index}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] ${textStyles} text-white`}
  >
    {title}
  </motion.h2>
);
