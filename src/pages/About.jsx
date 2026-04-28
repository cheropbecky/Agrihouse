import React from "react";
import jack from "../assets/jack.png";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="mb-6 inline-flex rounded-full border border-[#ff5a14] px-5 py-2 text-sm font-medium text-[#ff5a14]">
            About Us
          </span>

          <h2 className="text-[42px] font-black leading-[1.05] tracking-tight text-[#1f1f1f] sm:text-[56px]">
            From Our <span className="text-[#ff5a14]">Farm</span>
            <br />
            To Your Table
          </h2>

          <p className="mt-6 max-w-[620px] text-[17px] leading-relaxed text-[#575757]">
            At AgriHouse, we grow and deliver fresh farm products without
            pesticides or artificial additives. Every product is selected with
            care so you can enjoy real taste, better nutrition, and food you
            can trust every day.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] p-5">
              <p className="text-3xl font-bold text-[#1f1f1f]">10+ Years</p>
              <p className="mt-1 text-sm text-[#666]">Serving healthy families</p>
            </div>
            <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] p-5">
              <p className="text-3xl font-bold text-[#1f1f1f]">100% Natural</p>
              <p className="mt-1 text-sm text-[#666]">No chemicals, no shortcuts</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-[520px] overflow-hidden rounded-[32px] bg-[#f4f4f4] p-3">
            <img
              src={jack}
              alt="Jack from AgriHouse"
              className="w-full rounded-[24px] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 backdrop-blur-sm">
              <p className="text-lg font-semibold text-[#1f1f1f]">Jack Williams</p>
              <p className="text-sm text-[#666]">Founder, AgriHouse</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
