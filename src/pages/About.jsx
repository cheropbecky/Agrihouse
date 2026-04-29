import React, { useState } from "react";
import jack from "../assets/jack.png";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="bg-white py-24 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7 flex flex-col justify-center max-w-[580px]">
          <div className="mb-6">
            <span className="inline-flex rounded-full border border-[#fcae8b] bg-transparent px-6 py-2 text-sm font-semibold text-[#ff5100]">
              About Us
            </span>
          </div>

          <h2 className="text-[40px] md:text-[50px] leading-[1.7] tracking-tight" style={{ color: '#1E1E1E', fontWeight: 500, fontFamily: 'Poppins, sans-serif' }}>
            We started as a small family farm with<br className="hidden md:block" /> one simple goal — to grow <span className="text-[#ff5100]">real food</span> the<br className="hidden md:block" /> right way. <span className="text-[#ff5100]">No</span> chemicals, <span className="text-[#ff5100]">no</span> shortcuts, just<br className="hidden md:block" /> <span className="italic">honest work</span> and care in every product.
          </h2>

          <div className="mt-6 flex flex-col gap-4 text-[18px] md:text-[20px] leading-relaxed text-[#6a6a6a]">
            <p>
              It all began when Jack Smith, a farmer with a deep respect for nature, decided to leave large-scale industrial agriculture behind. He believed food should be grown with patience, not speed — and that people deserved better than mass-produced products{isExpanded ? '.' : '...'}
            </p>
            {isExpanded && (
              <>
                <p>
                  With a small team of five people, they began working on a modest piece of land, focusing on natural growing methods and quality over quantity. The early days were not easy — long hours, unpredictable weather, and slow growth — but they stayed committed to doing things right.
                </p>
                <p>
                  Over time, more people began to notice the difference. Customers came back not just for the products, but for the taste, the freshness, and the trust they felt in every purchase.
                </p>
                <p>
                  Today, we are still guided by the same values. We grow our products on our own farms, care for them daily, and deliver them fresh — so you can enjoy food the way it was always meant to be.”
                </p>
              </>
            )}
          </div>

          <div className="mt-8 mb-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-block text-[18px] md:text-[20px] font-semibold text-[#ff5100] underline decoration-2 underline-offset-[6px] transition-colors hover:text-[#e04800]"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-[500px] p-3">
            <img
              src={jack}
              alt="Jack from AgriHouse"
              className="w-full h-[480px] rounded-[24px] object-cover"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
