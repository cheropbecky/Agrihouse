import React from "react";
import jack from "../assets/jack.png";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto grid w-full max-w-330 grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="mb-6 inline-flex rounded-full border bg-[#ff5a1437] border-[#ff5a14] px-10 py-3 text-md font-medium text-[#ff5a14]">
            About Us
          </span>
          <h4
            className="leading-[0.85] text-black font-black"
            style={{
              fontSize: "clamp(35px, 8vw, 32px)",
              fontWeight: 400,
              fontFamily: "Poppins",
              lineHeight: "1.2",
            }}
          >
            We started as a small family farm with<br/> one simple goal — to grow  <span className="text-[#ff5a14]">real food </span>the <br/> right way. <span className="text-[#ff5a14]">No </span>chemicals,<span className="text-[#ff5a14]">no</span> shortcuts, just<br/> <span className="italic text-gray-700">honest work</span> and care in every product.
          </h4>


          <div className="mt-4 mb-2">
            <p
              className="mt-6 max-w-155 font-light text-[26px] leading-tight text-[#343434]"
              style={{ fontFamily: "Poppins" }}
            >
            It all began when Jack Smith, a farmer with a deep respect for nature, decided to leave large-scale industrial agriculture behind. He believed food should be grown with patience, not speed — and that people deserved better than mass-produced products...
          </p>
          </div>
          <p className="link text-3xl underline font-semibold text-[#ff5a14]">Read more...</p>

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
          <div className="relative mx-auto max-w-130">
            
            <div className="absolute bottom-0 right-0 h-[78%] w-[80%] rounded-3xl bg-[#ff5a14]" />

            <div className="relative z-10 overflow-hidden rounded-3xl">
              <img
                src={jack}
                alt="Jack Smith, Founder of AgriHouse"
                className="w-full object-cover"
                style={{ aspectRatio: "3/4" }}
              />
            </div>
          </div>
        </div>
          </div>
        
      
    </section>
  );
}
