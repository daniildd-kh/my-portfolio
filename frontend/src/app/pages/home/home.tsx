import { AccordionStack } from "@entities/accordion-stack";
import { LinkList } from "@entities/link-list";
import { Container } from "@widgets/container/container";
import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";
import { Hero } from "@widgets/hero";
import { ProjectList } from "@widgets/project-list";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <LinkList />
        <AccordionStack />
        <ProjectList />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
