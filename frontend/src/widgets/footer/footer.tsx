import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col py-6 px-3 bg-primary items-center gap-y-6">
      <div className="flex gap-x-4">
        <a>
          <img className="w-8" src="/icons/github.svg" alt="github" />
        </a>
        <a>
          <img className="w-8" src="/icons/telegram.svg" alt="telegram" />
        </a>
        <a>
          <img className="w-8" src="/icons/linkedin.svg" alt="telegram" />
        </a>
      </div>
      <div className="">
        <span>© 2024 Daniil Khromov</span>
      </div>
    </div>
  );
};
