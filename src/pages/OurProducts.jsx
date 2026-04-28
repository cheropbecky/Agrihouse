import React from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";

export default function OurProducts() {
  const products = [
    {
      id: 1,
      image: product1,
      name: "Farm Fresh Organic Eggs",
      description:
        "Collected daily from free-range chickens, these eggs are rich in nutrients, natural taste, and perfect for a healthy lifestyle.",
      price: "$15/pack",
      rating: "(999+)",
    },
    {
      id: 2,
      image: product2,
      name: "Stone-Ground Natural Flour",
      description:
        "Made from carefully selected wheat, our flour is minimally processed to keep nutrients and deliver pure, natural quality.",
      price: "$10/pack",
      rating: "(800+)",
    },
    {
      id: 3,
      image: product3,
      name: "Sweet Organic Strawberries",
      description:
        "Freshly picked, naturally grown strawberries full of flavor, vitamins, and perfect sweetness for a healthy snack.",
      price: "$12/pack",
      rating: "(999+)",
    },
    {
      id: 4,
      image: product4,
      name: "Pure Raw Farm Honey",
      description:
        "Harvested from natural hives, this honey is rich in flavor, full of nutrients, and completely free from additives.",
      price: "$20/pack",
      rating: "(800)",
    },
    {
      id: 5,
      image: product5,
      name: "Fresh Farm Whole Milk",
      description:
        "Naturally sourced from healthy cows, this milk is rich, creamy, and full of essential nutrients for everyday use.",
      price: "$12/bottle",
      rating: "(480)",
    },
    {
      id: 6,
      image: product6,
      name: "Cold-Pressed Organic Oil",
      description:
        "Carefully extracted from natural ingredients, this oil is pure, rich in nutrients, and perfect for healthy cooking.",
      price: "$10/bottle",
      rating: "(680)",
    },
  ];

  return (
    <section id="products" className="bg-[#f4f4f4] py-24 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-330">
        <div className="mb-10 flex flex-col gap-8 md:mb-12 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-[#ff5a14] px-5 py-2 text-sm font-medium text-[#ff5a14]">
              Our Products
            </span>
            <h2
              className="text-[42px] font-bold leading-[1.05] tracking-tight text-[#202124] sm:text-[52px]"
              style={{
                fontSize: "clamp(50px, 8vw, 56px)",
                fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              <span className="text-black">Taste </span>
              <span className="text-[#6f6f6f]">Real,</span>{" "}
              <span className="text-[#ff5a14]">Naturally</span>
              <br />
              <span className="text-black">Grown Products</span>
            </h2>
          </div>

          <p className="pt-1 text-right text-[24px] font-medium leading-relaxed text-[#4f4f4f] md:max-w-72.5">
            No chemicals. No additives.<br/> Only quality you can trust.
          </p>
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-2xl font-medium text-[#3b3b3b]">Our Products</p>

          <div className="flex flex-wrap gap-2 rounded-full">
            <button className="rounded-xl border border-[#b8b8b8] px-7 py-2 text-xl text-[#444] transition hover:bg-white">
              Best choice
            </button>
            <button className="rounded-xl bg-[#2b2b2b] px-7 py-2 text-xl text-white">
              Popular
            </button>
            <button className="rounded-xl border border-[#b8b8b8] px-7 py-2 text-xl text-[#444] transition hover:bg-white">
              New
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="rounded-xl border border-[#d6d6d6] bg-[#efefef] p-3 shadow-sm"
            >
              <div className="relative mb-3 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-60 w-full object-cover"
                />
              </div>

              <h3 className="mb-2 text-[31px] font-semibold leading-tight text-[#212121]">
                {product.name}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-[#606060]">
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <p className="text-3xl font-medium text-[#2f2f2f]">{product.price}</p>
                <button className="rounded-lg bg-[#ff5a14] px-10 py-2 text-2xl font-medium text-white transition hover:bg-[#ef4f0f]">
                  Buy
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <button
          className="flex items-center h-20 gap-4 bg-[#1a1c1e] hover:bg-black text-white px-10 py-5 rounded-full transition-all text-lg font-medium group"
          style={{ fontFamily: "Urbanist, sans-serif" }}
        >
          See More
          <div className="bg-white rounded-full p-5 group-hover:translate-x-1 transition-transform">
            <svg
              className="w-5 h-5 text-black rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}
