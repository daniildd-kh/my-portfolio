import React from "react";
import { NavIcons } from "@shared/ui/nav-icon";
import { INavIcon } from "@shared/lib/types/types";

export const LinkList = () => {
  const icons: INavIcon[] = [
    { text: "Резюме", link: "/", icon: "/icons/resume.svg" },
    { text: "GitHub", link: "/", icon: "/icons/github.svg" },
    { text: "Telegram", link: "/", icon: "/icons/telegram.svg" },
    { text: "LinkedIn", link: "/", icon: "/icons/linkedin.svg" },
  ];
  return (
    <div className="flex justify-center py-6">
      <NavIcons hasText={true} icons={icons} />
    </div>
  );
};
