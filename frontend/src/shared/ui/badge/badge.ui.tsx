import React from "react";
import classnames from "classnames";

type TypeVariant = {
  icon?: string;
  title: string;
  variant?: string;
};

interface IBadge {
  variant?: TypeVariant;
  color?: string;
  classNames?: string;
}

export const Badge = ({ variant, color, classNames }: IBadge) => {
  return (
    <div
      className={classnames(
        "inline-flex items-center rounded-full border border-dark px-2",
        color,
        classNames,
      )}
    >
      {variant?.icon && (
        <div className="w-4 mr-4">
          <img src={variant?.icon} alt={variant?.variant} />
        </div>
      )}
      <p className="font-sm font-bold">{variant?.title}</p>
    </div>
  );
};
