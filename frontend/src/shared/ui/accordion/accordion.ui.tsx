"use client";

import { motion, Variants } from "framer-motion";
import React, { ReactElement } from "react";
import { useState } from "react";
import { INavIcon } from "@shared/lib/types/types";

interface IAccordion {
  title: string;
  content: INavIcon[];
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const Accordion = ({ title, content }: IAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="max-w-[500px]"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.button
        whileTap={{ scale: 0.98 }}
        className="flex justify-between text-center pb-4 items-center w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-textColor text-lg font-bold leading-normal">
          {title}
        </h3>
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <img
            className="w-10"
            src="/icons/arrow-down.svg"
            alt="Посмотреть контент"
          />
        </motion.div>
      </motion.button>
      <motion.ul
        className="bg-primary p-4 flex gap-12"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 40% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {content.map((item, index) => (
          <motion.li variants={itemVariants} key={index}>
            {" "}
            <img className="w-10" src={item.icon} alt={item.text} />{" "}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
