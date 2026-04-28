import React, { useState } from "react";
import bookimage from "../assets/bookimage.png";

export default function FAQs() {
  const [openId, setOpenId] = useState(3);

  const faqs = [
    {
      id: 1,
      question: "How do shop-bought products differ from yours?",
      answer:
        "Our products are grown naturally without synthetic chemicals, with freshness and traceability from farm to table.",
    },
    {
      id: 2,
      question: "What if the food arrives in poor condition?",
      answer:
        "If your delivery arrives damaged or below quality standards, contact us immediately and we will replace or refund it.",
    },
    {
      id: 3,
      question: "How long does delivery take?",
      answer:
        "We deliver your order within 24 hours after harvest. Depending on your location, it usually takes 1-2 days to arrive fresh.",
    },
    {
      id: 4,
      question: "How experienced are your farmers?",
      answer:
        "Our farm partners have years of practical farming experience and follow strict natural growing standards.",
    },
    {
      id: 5,
      question: "Who are your products best for?",
      answer:
        "Our products are ideal for families, health-conscious individuals, athletes, and anyone who wants cleaner daily nutrition.",
    },
  ];

  return (
    <section id="faqs" className="bg-[#f3f3f3] py-24 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-330">
        <div className="mb-12 rounded-[26px] px-0 py-0 sm:px-4">
          <div className="mx-auto mb-6 w-fit rounded-full border border-[#ff5a14] px-7 py-2 text-sm font-medium text-[#ff5a14]">
            FAQ
          </div>
          <h2
            className="text-center text-[40px] font-black leading-tight text-[#161626] md:text-[48px]"
            style={{
              fontSize: "clamp(50px, 8vw, 56px)",
              fontWeight: 700,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <span className="text-black">Still Have </span>
            <span className="text-[#ff5a14]">Questions?</span>
          </h2>
          <p className="mt-3 text-center text-[18px] md:text-[24px] text-[#6a6a6a]">
            Everything you need to know before ordering
          </p>
        </div>

        <div className="mx-auto mb-14 w-full max-w-287.5 space-y-3">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <article
                key={item.id}
                className={`overflow-hidden rounded-xl ${isOpen ? "bg-[#ff5a14]" : "bg-[#ececec]"}`}
              >
                <button
                  onClick={() => setOpenId(item.id)}
                  className="group flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
                >
                  <h3
                    className={`pr-4 text-[18px] font-medium transition-colors md:text-[22px] ${isOpen ? "text-white" : "text-[#1e1e1e] group-hover:text-[#ff5a14]"}`}
                  >
                    {item.question}
                  </h3>
                  <svg
                    className={`h-6 w-6 transition-transform ${isOpen ? "rotate-180 text-white" : "text-[#4a4a4a] group-hover:text-[#ff5a14]"}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                    />
                  </svg>
                </button>

                {isOpen ? (
                  <div className="px-6 pb-6">
                    <p className="max-w-210 text-[16px] md:text-[18px] leading-relaxed text-white/95">
                      {item.answer}
                    </p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>

        <div className="mx-auto w-full max-w-305 overflow-hidden rounded-[20px]">
          <div
            className="relative px-6 py-14 text-center sm:px-10"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.22), rgba(0,0,0,0.02)), url(${bookimage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p className="text-[52px] font-extrabold leading-tight text-[#1f1f1f]">
              ORDER <span className="text-[#ff5a14]">FRESH FARM</span> PRODUCTS{" "}
              <span className="italic">TODAY!</span>
            </p>
            <p className="mx-auto mt-3 max-w-195 text-[24px] text-[#4c4c4c]">
              Get natural, chemical-free food delivered fresh straight to your
              table for a healthier and better everyday lifestyle
            </p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#252525] px-8 py-3 text-[22px] font-medium text-white">
              Order Products
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#f1f1f1] text-[#1f1f1f]">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
