import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function OurProducts() {
  const products = [
    {
      id: 1,
      image: product1,
      name: "Farm Fresh Organic Eggs",
      description:
        "Collected daily from free-range chickens, these eggs are rich in nutrients, natural taste, and perfect for a healthy lifestyle.",
      price: "$15/pack",
    },
    {
      id: 2,
      image: product2,
      name: "Stone-Ground Natural Flour",
      description:
        "Made from carefully selected wheat, our flour is minimally processed to keep nutrients and deliver pure, natural quality.",
      price: "$10/pack",
    },
    {
      id: 3,
      image: product3,
      name: "Sweet Organic Strawberries",
      description:
        "Freshly picked, naturally grown strawberries full of flavor, vitamins, and perfect sweetness for a healthy snack.",
      price: "$12/pack",
    },
    {
      id: 4,
      image: product4,
      name: "Pure Raw Farm Honey",
      description:
        "Harvested from natural hives, this honey is rich in flavor, full of nutrients, and completely free from additives.",
      price: "$20/pack",
    },
    {
      id: 5,
      image: product5,
      name: "Fresh Farm Whole Milk",
      description:
        "Naturally sourced from healthy cows, this milk is rich, creamy, and full of essential nutrients for everyday use.",
      price: "$12/bottle",
    },
    {
      id: 6,
      image: product6,
      name: "Cold-Pressed Organic Oil",
      description:
        "Carefully extracted from natural ingredients, this oil is pure, rich in nutrients, and perfect for healthy cooking.",
      price: "$10/bottle",
    },
  ];

  return (
    <section id="products" className="bg-[#f4f4f4] py-24 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="mb-10 flex flex-col gap-8 md:mb-12 md:flex-row md:items-center md:justify-between">
          <FadeUp>
            <div>
              <span className="mb-6 inline-flex rounded-full border border-[#fcae8b] px-5 py-1.5 text-sm font-medium text-[#ff5100]">
                Our Products
              </span>
              <h2
                className="leading-[1.1] tracking-tight text-[#1E1E1E]"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Poppins, sans-serif" }}
              >
                <span className="font-black text-[#1E1E1E]">Taste</span>{" "}
                <span className="font-black text-[#7a7a7a]">Real,</span>{" "}
                <span className="text-[#ff5100] font-black">Naturally</span>
                <br />
                <span className="font-black text-[#1E1E1E]">Grown Products</span>
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-sm md:text-base leading-relaxed text-[#555] font-medium lg:text-left md:mt-12">
              No chemicals. No additives.<br /> Only quality you can trust.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-[#6b6b6b]">Our Products</p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <button className="rounded-lg border border-[#d1d1d1] bg-transparent px-5 py-1.5 text-sm font-medium text-[#444] transition hover:border-[#b1b1b1]">
                Best choice
              </button>
              <button className="rounded-lg bg-[#2b2b2b] px-6 py-1.5 text-sm font-medium text-white transition hover:bg-[#1a1a1a]">
                Popular
              </button>
              <button className="rounded-lg border border-[#d1d1d1] bg-transparent px-5 py-1.5 text-sm font-medium text-[#444] transition hover:border-[#b1b1b1]">
                New
              </button>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, i) => (
            <FadeUp key={product.id} delay={i * 0.08}>
              <article className="rounded-xl border border-[#d6d6d6] bg-white p-3 shadow-sm h-full">
                <div className="relative mb-3 overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-60 w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-lg p-3 md:text-xl font-semibold leading-tight text-[#212121]">
                  {product.name}
                </h3>
                <p className="mb-6 p-3 pt-1 text-sm leading-relaxed text-[#606060]">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xl pl-5 font-medium text-[#2f2f2f]">{product.price}</p>
                  <button className="rounded-lg bg-[#ff5a14] px-6 py-2 text-sm font-medium text-white transition hover:bg-[#ef4f0f]">
                    Buy
                  </button>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1}>
          <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-4 rounded-full bg-[#242424] py-1.5 pl-6 pr-1.5 text-white transition hover:bg-[#3a3a3a] shadow-md">
              <span className="text-sm font-medium">See More</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black drop-shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </div>
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
