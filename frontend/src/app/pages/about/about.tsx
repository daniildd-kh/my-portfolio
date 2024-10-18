import { AccordionStack } from "@entities/accordion-stack";
import { LinkList } from "@entities/link-list";
import { Container } from "@widgets/container/container";
import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";
import React from "react";

export const About = () => {
  return (
    <>
      <Header />
      <Container>Страница about</Container>
      <Footer />
    </>
  );
};
