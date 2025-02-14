"use client";

import { DeliveryIcon, Logo, NewIcon, PointsIcon } from "@/assets";
import { cloneElement, FC } from "react";

import chopsticksImage from "./chopsticks.png";
import Image from "next/image";
import { FORM_URL } from "@/constants";

export const Hero: FC = () => {
  return (
    <>
      <header>
        <div className="container mx-auto py-4 flex justify-between items-center">
          <Logo className="h-[2.875rem] w-auto" />

          <p className="text-xl">м. Харків, просп. Аерокосмічний, 52</p>

          <a
            href="#"
            className="button"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("menu")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Переглянути меню
          </a>
        </div>
      </header>
      <section className="pb-12">
        <div className="container mx-auto grid grid-cols-[8fr_4fr] gap-4">
          <div className="py-16">
            <h1 className="mb-4 text-5xl font-bold">
              Святкуй <span className="text-primary">День закоханих</span>{" "}
              <br />
              разом із SushiDev!
            </h1>
            <p className="mb-8 text-primary text-2xl font-medium uppercase">
              Знижка 20% на замовлення сету на двох
            </p>
            <a href={FORM_URL} target="_blank" className="button">
              Забронювати столик
            </a>
          </div>
          <Image
            className="max-w-[23.75rem] w-full m-auto"
            src={chopsticksImage}
            alt=""
          />
        </div>
      </section>
      <section className="py-12">
        <div className="container m-auto">
          <h2 className="mb-12 text-primary text-3xl text-center font-medium uppercase tracking-[0.375rem]">
            СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {[
              {
                icon: <NewIcon />,
                title: "Сезонні новинки",
                description: `щотижня ми готуємо нові страви, щоб кожен візит приносив нові смаки та емоції.`,
              },
              {
                icon: <DeliveryIcon />,
                title: "Безкоштовна доставка",
                description: `при замовленні від 500 грн – отримайте улюблені суші прямо до дверей.`,
              },
              {
                icon: <PointsIcon />,
                title: "Накопичуйте бали",
                description: `за кожне замовлення та обмінюйте їх на знижки, подарунки та спеціальні пропозиції.`,
              },
            ].map((item, i) => (
              <div
                className="flex flex-col items-center max-w-[19rem] m-auto"
                key={i}
              >
                {cloneElement(item.icon, {
                  className: "h-[5.5rem] w-auto mb-4",
                })}
                <h3 className="mb-2 text-[1.375rem] text-center font-medium">
                  {item.title}
                </h3>
                <p className="text-base text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
