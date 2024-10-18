import React from "react";

export const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col container mx-auto px-4 pb-20 mt-[100px]">
      {children}
    </div>
  );
};
