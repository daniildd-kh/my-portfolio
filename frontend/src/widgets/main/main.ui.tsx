import React from "react";
import { Hero } from "@widgets/hero";
import { ProjectList } from "@widgets/project-list/project-list";
import { LinkList } from "@entities/link-list";
import { AccordionStack } from "@entities/accordion-stack";
export const Main = () => {
  return (
    <div className="flex flex-col container mx-auto px-4 pb-20 mt-[100px]">
      <Hero />
      <LinkList />
      <AccordionStack />
      <ProjectList />
    </div>
  );
};
