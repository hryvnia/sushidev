import { FC } from "react";

import aboutImage from "./image.png";
import Image from "next/image";

export const About: FC = () => {
  return (
    <section>
      <div className="container m-auto py-12">
        <div className="grid grid-cols-2 gap-8">
          <div className="">
            <div className="aspect-square rounded-[3.75rem] overflow-hidden">
              <Image
                className="h-full w-full object-cover"
                src={aboutImage}
                alt=""
              />
            </div>
          </div>
          <div className="">
            <h2 className="mb-2 text-3xl text-primary font-medium uppercase tracking-[0.375rem]">
              ПРО НАС
            </h2>
            <p className="mb-8 text-xl">
              Ласкаво просимо до{" "}
              <span className="text-primary font-bold">SushiDev</span> – місця,
              де справжній смак японської кухні оживає завдяки свіжим
              інгредієнтам та майстерності наших кухарів. Ми пропонуємо швидке
              та зручне замовлення, гарантуємо високоякісний сервіс і створюємо
              атмосферу, в якій кожен клієнт відчуває себе особливим. Обирайте
              SushiDev, і ви відчуєте, як кожне замовлення перетворюється на
              справжнє свято смаку!
            </p>
            <h2 className="mb-2 text-3xl text-primary font-medium uppercase tracking-[0.375rem]">
              КОНТАКТИ
            </h2>
            <p className="text-xl">sushidev@gmail.com</p>
            <p className="text-xl">+38 (099) 947-42-32</p>
            <p className="text-xl text-primary font-bold">
              м. Харків, просп. Аерокосмічний, 52
            </p>
          </div>
        </div>
      </div>

      <div className="container m-auto py-6">
        <p className="text-sm text-center ">© SushiDev. Усі права захищені</p>
      </div>
    </section>
  );
};
