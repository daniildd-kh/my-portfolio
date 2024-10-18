import { Badge } from "@shared/ui/badge";
import React from "react";

const ProjectStack = ({ stack }: { stack: string[] }) => {
  return (
    <div className="flex gap-2 mt-4">
      {stack.map((item, index) => (
        <Badge variant={{ title: item }} key={index} />
      ))}
    </div>
  );
};

export default ProjectStack;
