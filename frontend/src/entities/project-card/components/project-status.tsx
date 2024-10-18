import React from "react";

interface IProjectStatus {
  status: string;
  date: string;
  color: string;
}

export const ProjectStatus = ({ status, date, color }: IProjectStatus) => {
  const projectStatus: Record<string, string> = {
    finished: "Завершен",
    inProcess: "В разработке",
  };

  const statusText = projectStatus[status] || "Прототип";

  return (
    <div className="flex items-center text-sm font-semibold" style={{ color }}>
      <span>{statusText}</span>
      <span className="mx-2">•</span>
      <span>{date}</span>
    </div>
  );
};
