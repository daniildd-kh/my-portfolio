"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeaderUI from "./components/header.ui";

export const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const title = "Хромов Даниил";
  const navigations = [
    { name: "Портфолио", link: "/" },
    { name: "О себе", link: "/about" },
    { name: "Блог", link: "/blog" },
    { name: "Контакты", link: "/contacts" },
  ];

  useEffect(() => {
    const handleScrollHeader = () => {
      const heroSection = document.querySelector("#hero");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsFixed(heroBottom <= 0);
      }
    };
    handleScrollHeader();

    window.addEventListener("scroll", handleScrollHeader);
    return () => {
      window.removeEventListener("scroll", handleScrollHeader);
    };
  }, []);

  return (
    <>
      <HeaderUI title={title} navigations={navigations} />
      {isFixed && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-30"
        >
          <HeaderUI title={title} navigations={navigations} isFixed />
        </motion.header>
      )}
    </>
  );
};
