import { INavIcon, TSvgIcon } from "@shared/lib/types/types";
import React from "react";

interface INavIcons {
  icons: INavIcon[];
  hasText?: boolean;
  iconSize?: string;
}

export const NavIcons = ({
  icons,
  hasText = false,
  iconSize = "8",
}: INavIcons) => {
  return (
    <div className="">
      <ul className="flex gap-10 items-center md:gap-20">
        {icons.map((icon, index) => (
          <li key={index}>
            <a
              href={icon.link}
              className="text-base font-semibold leading-normal text-textColor flex gap-2 items-center"
            >
              <img
                className={`w-${iconSize}`}
                src={icon.icon}
                alt={icon.text}
              />
              {hasText && <span className="md:block hidden">{icon.text}</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavIcons;
