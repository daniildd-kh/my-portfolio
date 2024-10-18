"use client";

import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Link from "next/link";

type TypeNavigation = {
  name: string;
  link: string;
};

interface IHeaderUI {
  title: string;
  navigations: TypeNavigation[];
  isFixed?: boolean;
}

const HeaderUI = ({ title, navigations, isFixed = false }: IHeaderUI) => {
  const textHeader =
    "px-[3vw] flex items-center rounded-3xl leading-normal text-nav";
  const headerStyles =
    "w-full flex mt-4 items-center justify-center z-30 transition transform ease-in-out delay-300";
  const navigationStyles =
    "rounded-full border border-dark flex divide-x py-4 divide-dark";

  return (
    <header
      className={classnames(headerStyles, {
        fixed: isFixed,
      })}
    >
      <nav className={classnames(navigationStyles, { "bg-light": isFixed })}>
        <span
          className={classnames(textHeader, "font-semibold md:block hidden")}
        >
          {title}
        </span>
        <ul className="flex">
          {navigations &&
            navigations.map((navigation, index) => (
              <li className="flex" key={index}>
                <Link href={navigation.link} className={textHeader}>
                  {navigation.name}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderUI;
