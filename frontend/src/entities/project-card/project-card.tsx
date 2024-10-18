import React from "react";
import { Badge } from "@shared/ui/badge";
import { IProjectCard } from "./project-card.types";
import { ProjectBadge } from "./components/project-badge";
import { ProjectStatus } from "./components/project-status";
import Button from "@shared/ui/button/button.ui";
import { ProjectButton } from "./components/project-button";
import ProjectStack from "./components/project-stack";

export const ProjectCard = ({
  themeColor,
  title,
  projectType,
  completionDate,
  description,
  buttonText,
  projectStatus,
  projectStack,
  imageLink,
  dispositionVertical = false,
}: IProjectCard) => {
  return (
    <a
      className={
        "flex md:flex-row flex-col p-8 w-full max-w-[900px] rounded-xl items-start justify-between transition-all transform duration-300 hover:scale-105 hover:shadow-lg bg-white md:gap-2 gap-10"
      }
      onMouseOver={(e) => {
        const img = e.currentTarget.querySelector(
          ".project-image",
        ) as HTMLImageElement;
        if (img) {
          img.style.boxShadow = `0px 0px 45px 15px ${themeColor}`;
        }
      }}
      onMouseOut={(e) => {
        const img = e.currentTarget.querySelector(
          ".project-image",
        ) as HTMLImageElement;
        if (img) {
          img.style.boxShadow = `0px 0px 40px 10px ${themeColor}`;
        }
      }}
    >
      <div className="flex flex-col flex-1">
        <ProjectBadge variant={projectType} />
        <h2 className="text-lg font-bold mt-2">{title}</h2>
        <ProjectStatus
          status={projectStatus}
          date={completionDate}
          color={themeColor}
        />
        <p className="text-base leading-7 mt-2 mb-4">{description}</p>
        <ProjectButton text={buttonText} />
        <ProjectStack stack={projectStack} />
      </div>
      <div className="flex justify-center items-center flex-1 h-full max-h-full my-auto">
        <img
          className="project-image object-cover rounded-lg max-w-full max-h-full transition-shadow duration-300 ease-in-out"
          style={{ boxShadow: `0px 0px 40px 10px ${themeColor}` }}
          src={imageLink}
          alt={title}
        />
      </div>
    </a>
  );
};
