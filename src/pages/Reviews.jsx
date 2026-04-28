import React, { useState } from "react";
import benefitsBg from "../assets/benefitsBg.png";

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Olivia Carter",
      text: "The quality is honestly impressive. Everything tastes fresh and natural, like it was just picked. I've completely stopped buying similar products from supermarkets.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    },
    {
      id: 2,
      name: "James Wilson",
      text: "You can really feel the difference in taste. The delivery is always fast, and everything arrives fresh. Definitely worth it for a healthier lifestyle.",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    },
    {
      id: 3,
      name: "Sophia Bennett",
      text: "I started ordering for my family and now we rely on these products daily. Clean, fresh, and consistent every time without any disappointment.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1545996124-1b9a7f4a7f0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    },
  ];

  const placeholderAvatar = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24'><rect width='100%' height='100%' fill='%23c8b89a'/><g fill='%23ffffff'><circle cx='12' cy='8' r='3'/><path d='M12 12c-4 0-6 2-6 4v1h12v-1c0-2-2-4-6-4z'/></g></svg>`)}`;

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const visible = [
    reviews[current % reviews.length],
    reviews[(current + 1) % reviews.length],
    reviews[(current + 2) % reviews.length],
  ];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-10"
      style={{
        backgroundImage: `url(${benefitsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-300">

        {/* Header row */}
        <div className="mb-10">
          <div className="bg-white text-[#ff5100] px-8 py-2 rounded-full inline-block font-bold mb-3 text-lg tracking-wide">
            Reviews
          </div>

          <h2
            className="text-[48px] sm:text-[56px] font-black leading-[1.05] tracking-tight text-[#1a1a1a]"
            style={{
              fontSize: "clamp(60px, 8vw, 56px)",
              fontWeight: 700,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <span className="text-[#ff5100]">30,000+ </span>
            <span className="text-black">Happy Buyers</span>
          </h2>
          <p className="mt-3 max-w-105 text-[24px]  font-medium leading-relaxed text-[#383636]">
            Real taste, fresh delivery, and genuine trust — that's why customers keep coming back
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {visible.map((review, idx) => (
            <article
              key={`${review.id}-${idx}`}
              className="relative h-90 rounded-b-sm bg-white/90 border border-[#e8ddd0] p-7 shadow-sm backdrop-blur-sm flex flex-col"
            >
              {/* Decorative quote on top */}
              <div className="mb-1 text-left text-7xl font-serif text-[#1a1a1a] opacity-70">“</div>

              {/* Review text */}
              <div className="flex-1">
                <p className="mb-2 text-[24px] font-medium leading-relaxed text-[#3a3a3a]">
                  {review.text}
                </p>
              </div>

              {/* Ratings above name; name left, image right */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="mb-1 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-[#ff5100]" : "text-[#858585]"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-[15px] font-semibold text-[#1a1a1a]">{review.name}</div>
                </div>

                <img
                  src={review.avatar || placeholderAvatar}
                  alt={review.name}
                  className="h-14 w-14 rounded-full object-cover shrink-0"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom row: CTA + arrows */}
        <div className="mt-8 flex items-center justify-between">
          <button className="rounded-full bg-[#1a1a1a] px-7 py-3 text-sm font-semibold text-white hover:bg-[#333] transition-colors">
            Write a review
          </button>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="h-11 w-11 rounded-full border border-[#1a1a1a] flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-colors text-[#1a1a1a]"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="h-11 w-11 rounded-full border border-[#1a1a1a] flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-colors text-[#1a1a1a]"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}