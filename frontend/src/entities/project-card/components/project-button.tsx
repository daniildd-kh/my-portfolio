import Button from "@shared/ui/button/button.ui";
import React from "react";
import { ArrowRight } from "@shared/icons";

export const ProjectButton = ({ text }: { text: string }) => {
  return <Button text={text} icon={<ArrowRight />} />;
};
