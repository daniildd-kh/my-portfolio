"use client";

import React, { useEffect, useRef, useState } from "react";
import { BackgroundCircles } from "@widgets/hero/components/background-circles";
export const Hero = () => {
  const backgroundCirclesRef = useRef<HTMLInputElement>(null);
  const [isBackgroundCircleInView, setIsBackgroundCircleInView] =
    useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Пользователь почти докрутил до картинки!");
          setIsBackgroundCircleInView(true);
        } else {
          setIsBackgroundCircleInView(false);
        }
      });
    });

    if (backgroundCirclesRef.current) {
      observer.observe(backgroundCirclesRef.current);
    }
    return () => {
      if (backgroundCirclesRef.current) {
        observer.unobserve(backgroundCirclesRef.current);
      }
    };
  }, []);
  return (
    <section
      id="hero"
      className="flex flex-col items-center relative justify-center pb-10"
    >
      <BackgroundCircles
        ref={backgroundCirclesRef}
        isInView={isBackgroundCircleInView}
      />
      <div className="absolute gap-y-4 flex flex-col items-center text-base">
        <h1 className="font-bold text-xl leading-normal gradient-text text-center">
          Привет! Это Даниил
        </h1>
        <span className="flex gap-x-2 justify-center text-center">
          <img
            width="24px"
            height="24px"
            src="/icons/marker.svg"
            alt="Иконка локации"
          />
          <p>Россия, г. Москва</p>
        </span>
        <div className="max-w-lg text-center">
          <p>
            Я Frontend-разработчик, имею множество навыков в Backend среде. Это
            сайт с моими работами, а также небольшим блогом со статьями.
          </p>
        </div>
      </div>
    </section>
  );
};
