import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import {
  image1,
  image10,
  image11,
  image12,
  image13,
  image14,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from "./assets";
import clsx from "clsx";

export const Menu: FC = () => {
  return (
    <section id="menu" className="py-12">
      <div className="container m-auto">
        <h2 className="mb-12 text-primary text-3xl text-center font-medium uppercase tracking-[0.375rem]">
          Меню
        </h2>
        <ProductGroup title="СЕТИ ДЛЯ КОМПАНІЇ" products={group1} />
        <ProductGroup title="РОЛИ КЛАСИЧНІ (8 шт)" products={group2} />
        <ProductGroup title="Спеціальні роли (8 шт)" products={group3} />
        <ProductGroup title="СУШІ БУРГЕРИ (1шт)" products={group4} />
      </div>
    </section>
  );
};

const ProductGroup: FC<{ title: string; products: Product[] }> = ({
  title,
  products,
}) => {
  return (
    <div>
      <h3 className="mb-8 text-xl text-center font-medium uppercase tracking-[0.25rem]">
        {title}
      </h3>
      <div className="mb-9 grid grid-cols-3 gap-7">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

interface Product {
  image: StaticImageData;
  name: string;
  weight: string;
  price: number;
  oldPrice?: number;
  description: string;
}

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
    <div
      className={clsx(
        "bg-white border border-black/10 overflow-hidden",
        "rounded-tl-[4.75rem] rounded-tr-[0.625rem] rounded-bl-[0.625rem] rounded-br-[0.625rem]",
        "flex flex-col"
      )}
    >
      <Image className="rounded-br-[4.75rem]" src={product.image} alt="" />

      <div className="py-4 px-6">
        <div className="mb-2 flex">
          <h4 className="text-[1.5rem] font-bold font-['Philosopher'] leading-[1.2]">
            {product.name}
          </h4>
          <div className="mt-auto ml-auto text-[0.875rem] text-primary flex-shrink-0">
            {product.weight}
          </div>
        </div>
        <p className="mb-4 text-sm">{product.description}</p>
        <div className="mt-auto flex items-center gap-4">
          <div className="text-[1.5rem] text-primary font-['Philosopher'] font-bold">
            {product.price} грн.
          </div>
          {!!product.oldPrice && (
            <div className="text-lg font-bold font-['Philosopher'] line-through">
              {product.oldPrice} грн.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const group1: Product[] = [
  {
    image: image1,
    name: "Для двох (20 шт.)",
    weight: "510 г",
    description:
      "Філадельфія з лососем, Макі з лососем, Суші нігірі з лососем, Суші нігірі з креветкою.",
    price: 440,
    oldPrice: 549,
  },
  {
    image: image2,
    name: "SuchiDev (32 шт.)",
    weight: "1020 г",
    description:
      "Філадельфія з лососем, Філадельфія з тунцем, Торі Рол, Каліфорнія з вугрем в кунжуті",
    price: 999,
  },
  {
    image: image3,
    name: "Ролл Party (40 шт.)",
    weight: "1280 г",
    description:
      "Філадельфія з лососем, Філадельфія з креветкою, Філадельфія з лососем в кунжуті, Філадельфія з креветкою в кунжуті, Торі Рол",
    price: 1250,
  },
];

const group2: Product[] = [
  {
    image: image4,
    name: "Філадельфія класична",
    weight: "270 г",
    description: "Рис, лосось, крем сир, авокадо, огірок, норі",
    price: 295,
  },

  {
    image: image5,
    name: "Каліфорнія з креветкою в кунжуті",
    weight: "240 г",
    description: "Рис, креветка, омлет, огірок, кунжут, соус унагі, норі",
    price: 275,
  },

  {
    image: image6,
    name: "Макі з лососем",
    weight: "130 г",
    description: "Рис, лосось, норі",
    price: 195,
  },

  {
    image: image7,
    name: "Макі з тунцем",
    weight: "130 г",
    description: "Рис, тунець, норі",
    price: 210,
  },

  {
    image: image8,
    name: "Макі з вугрем",
    weight: "130 г",
    description: "Рис, вугор, норі",
    price: 159,
    oldPrice: 210,
  },
];

const group3: Product[] = [
  {
    image: image9,
    name: "Філадельфія унагі ",
    weight: "270 г",
    description:
      "Рис, вугор, авокадо, крем сир, огірок, соус унагі, кунжут, норі",
    price: 345,
    oldPrice: 390,
  },
  {
    image: image10,
    name: "Темпура-рол з лососем",
    weight: "240 г",
    description:
      "Рис, лосось, краб мікс, авокадо, кляр темпура, соус світ чилі, сухарі панко, кунжут, норі",
    price: 245,
    oldPrice: 325,
  },
  {
    image: image11,
    name: "SuchiDev рол",
    weight: "260 г",
    description:
      "Рис, креветка, огірок, авокадо, крем сир, ікра тобіко, соус cвіт чилі, кунжут, норі",
    price: 299,
  },
];

const group4: Product[] = [
  {
    image: image12,
    name: "Суші бургер “Лосось”",
    weight: "320 г",
    description:
      "Рис, лосось, огірок, салат айсберг, авокадо, сир, борошно темпура, сухарі панко, соус горіховий, майонез, кунжут, цибуля зелена, норі",
    price: 285,
  },
  {
    image: image13,
    name: "Суші бургер “Курочка”",
    weight: "320 г",
    description:
      "Рис, копчена курка, огірок, перець болгарський, салат айсберг, сир, борошно темпура, сухарі панко, соус світ чилі, майонез, цибуля зелена",
    price: 199,
    oldPrice: 225,
  },
  {
    image: image14,
    name: "Суші бургер “Креветка”",
    weight: "320 г",
    description:
      "Рис, креветка, огірок, авокадо, салат айсберг, сир, борошно темпура, сухарі панко, соус світ чилі, соус унагі, майонез, ікра тобіко",
    price: 275,
  },
];
