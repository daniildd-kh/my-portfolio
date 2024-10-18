import React, { ReactElement, ReactSVGElement } from "react";
import classnames from "classnames";

interface IButton {
  text: string;
  icon?: ReactElement;
}

const Button = ({ text, icon }: IButton) => {
  return (
    <button
      className={classnames(
        "self-start bg-background border-none rounded-lg py-4 px-10 transition-all duration-300 hover:bg-textColor hover:text-background flex gap-4 w-[200px]",
        {
          "hover:gap-6": icon,
        },
      )}
    >
      {text}
      {icon && icon}
    </button>
  );
};

export default Button;
