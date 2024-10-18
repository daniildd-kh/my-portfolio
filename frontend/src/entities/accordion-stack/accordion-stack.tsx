import React, { useState } from "react";
import { Accordion } from "@shared/ui/accordion";
import { INavIcon } from "@shared/lib/types/types";

export const AccordionStack = () => {
  const items: INavIcon[] = [
    { text: "React", link: "/", icon: "/icons/react.png" },
    { text: "NodeJs", link: "/", icon: "/icons/nodejs.png" },
    { text: "TypeScript", link: "/", icon: "/icons/typescript.png" },
  ];

  return <Accordion title="Основной стек" content={items} />;
};
