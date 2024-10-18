import { SVGProps } from "react";

export type TSvgIcon = SVGProps<SVGElement>;

export interface INavIcon {
  text: string;
  icon: string;
  link?: string;
}
