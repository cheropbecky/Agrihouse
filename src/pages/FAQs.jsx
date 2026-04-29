import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import bookimage from "../assets/bookimage.png";
import orangebadge from "../assets/orangebadge.png";
import whitebadge from "../assets/whitebadge.png";

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

export default function FAQs() {
  const [openId, setOpenId] = useState(3);

  const faqs = [
    {
      id: 1,
      question: "How do shop-bought products differ from yours?",
      answer: "In taste, quality and nutritional value. We grow our produce naturally, just as people did a hundred years ago, without chemicals, so it has a natural, authentic flavour",
    },
    { id: 2, question: "What if the food arrives in poor condition?", answer: "If something isn't right, we'll replace your order or offer a full refund — no questions asked." },
    { id: 3, question: "How long does delivery take?", answer: "We deliver your order within 24 hours after harvest. Depending on your location, it usually takes 1–2 days to arrive fresh." },
    { id: 4, question: "How experienced are your farmers?", answer: "Our team includes farmers with 3 to 15 years of hands-on experience, ensuring consistent quality and natural growing methods you can trust." },
    { id: 5, question: "Who are your products best for?", answer: "Our products are perfect for people who care about their health, want natural food, and value real taste over mass-produced alternatives." },
  ];

  return (
    <section id="faqs" className="bg-[#f3f3f3] py-24 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1320px]">

        {/* FAQ Header */}
        <FadeUp>
          <div className="mb-14 text-center sm:px-4">
            <div className="mx-auto mb-6 w-fit rounded-full border border-[#fcae8b] bg-transparent px-8 py-2 text-[16px] font-semibold text-[#ff5100]">
              FAQ
            </div>
            <h2 className="text-[48px] md:text-[64px] lg:text-[76px] font-black leading-[1.1] text-[#1E1E1E]">
              Still Have <span className="text-[#ff5100]">Questions?</span>
            </h2>
            <p className="mt-4 text-[18px] md:text-[22px] font-medium text-[#7a7a7a]">
              Everything you need to know before ordering
            </p>
          </div>
        </FadeUp>

        {/* FAQ Accordion Items */}
        <div className="mx-auto mb-20 w-full max-w-[900px] space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <FadeUp key={item.id} delay={i * 0.07}>
                <article
                  className={`overflow-hidden rounded-xl border border-[#ebebeb] shadow-sm transition-all duration-200 ${isOpen ? "bg-[#ff5100] border-[#ff5100]" : "bg-white"
                    }`}
                >
                  <button
                    onClick={() => setOpenId(item.id)}
                    className="group flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
                  >
                    <h3 className={`pr-4 text-[20px] md:text-[22px] font-medium transition-colors ${isOpen ? "text-white" : "text-[#1e1e1e]"}`}>
                      {item.question}
                    </h3>
                    <svg className={`h-6 w-6 transition-transform ${isOpen ? "text-white rotate-180" : "text-[#1e1e1e]"}`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <motion.div
                      className="px-6 pb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <p className="max-w-[700px] text-[17px] md:text-[18px] leading-relaxed text-white/95">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </article>
              </FadeUp>
            );
          })}
        </div>

        {/* Banner Section */}
        <FadeUp delay={0.1}>
          <div className="mx-auto w-full max-w-[1220px]">
            <div
              className="relative overflow-hidden rounded-[40px] px-6 py-20 text-center sm:px-16 lg:py-28"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(${bookimage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={orangebadge}
                alt="Fresh Badge"
                className="absolute left-6 top-8 z-20 w-[60px] md:left-12 md:top-12 md:w-[90px]"
              />
              <img
                src={whitebadge}
                alt="Quality Badge"
                className="absolute right-6 top-1/2 z-20 w-[45px] -translate-y-1/2 md:right-10 md:w-[70px]"
              />

              <div className="relative z-10 mx-auto max-w-[980px]">
                <h2 style={{ fontSize: "53px", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "900", color: "black" }} className="font-black uppercase tracking-tight text-black text-[36px] leading-[1.1] sm:text-[50px] md:text-[60px] lg:text-[72px]">
                  ORDER <span className="text-[#ff5100]">FRESH FARM</span> PRODUCTS <span className="italic font-extrabold">TODAY!</span>
                </h2>

                <p style={{ fontSize: "26px", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "300", color: "black", marginTop: "20px", fontFamily: "Poppins" }} className="mx-auto mt-10 max-w-[1000px] text-[16px] font-normal leading-relaxed text-[#4a4a4a] sm:text-[18px] md:text-[21px]">
                  Get natural, chemical-free food delivered fresh straight to your table for
                  <br className="hidden md:block" /> a healthier and better everyday lifestyle
                </p>

                <button className="mx-auto mt-10 flex items-center gap-6 rounded-full bg-[#222222] p-2 pl-8 transition-all hover:bg-black hover:scale-[1.02]">
                  <span className="text-[18px] font-semibold text-white">
                    Order Products
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}