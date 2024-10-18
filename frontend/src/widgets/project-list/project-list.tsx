"use client";
import React, { useEffect, useState } from "react";
import { ProjectCard, IProjectCard } from "@entities/project-card";
import { getProjectCards } from "./api";

export const ProjectList = () => {
  const [projects, seProjects] = useState([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    getProjectCards()
      .then((projectCards) => {
        seProjects(projectCards);
      })
      .catch((error) => {
        console.error("Ошибка получения карточек проектов:", error);
      });
  }, []);

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <section className="flex flex-col gap-y-20 justify-center items-center">
      {projects.map((project: IProjectCard, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          themeColor={project.themeColor}
          description={project.description}
          projectType={project.projectType}
          projectStatus={project.projectStatus}
          projectStack={project.projectStack}
          completionDate={project.completionDate}
          buttonText={project.buttonText}
          imageLink={project.imageLink}
        />
      ))}
    </section>
  );
};
