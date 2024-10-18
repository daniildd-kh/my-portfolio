import React from "react";
import { Badge } from "@shared/ui/badge";

interface IProjectBadge {
  variant: string;
}

export const ProjectBadge = ({ variant }: IProjectBadge) => {
  const varianList = [
    { icon: "/icons/badget-check.svg", title: "Завершен", variant: "finished" },
    { icon: "/icons/book.svg", title: "Учебный проект", variant: "study" },
    { icon: "/icons/dev.svg", title: "В разработке", variant: "inProcess" },
    { icon: "/icons/draw.svg", title: "Прототип", variant: "prototype" },
  ];

  const selectedVariant = varianList.find((item) => item.variant === variant);
  return <Badge variant={selectedVariant} classNames={"mr-auto"} />;
};
