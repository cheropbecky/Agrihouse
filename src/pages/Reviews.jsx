import React from "react";
import benefitsBg from "../assets/benefitsBg.png";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Olivia Carter",
      avatar: "https://i.pravatar.cc/150?img=47",
      text: "The quality is honestly impressive. Everything tastes fresh and natural, like it was just picked. I've completely stopped buying similar products from supermarkets.",
      rating: 5,
    },
    {
      id: 2,
      name: "James Wilson",
      avatar: "https://i.pravatar.cc/150?img=11",
      text: "You can really feel the difference in taste. The delivery is always fast, and everything arrives fresh. Definitely worth it for a healthier lifestyle.",
      rating: 4,
    },
    {
      id: 3,
      name: "Sophia Bennett",
      avatar: "https://i.pravatar.cc/150?img=44",
      text: "I started ordering for my family and now we rely on these products. Clean, fresh, and consistent every time without any disappointment.",
      rating: 5,
    },
  ];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-10"
      style={{
        backgroundImage: `url(${benefitsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="mb-10 flex flex-col gap-8 md:mb-12 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="mb-6 inline-flex text-[#ff5100] rounded-full bg-white px-8 py-2 text-sm shadow-sm">
              Reviews
            </span>
            <h2 className="leading-[1.1] tracking-tight text-[#1e1e1e]" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', fontFamily: 'Poppins, sans-serif' }}>
              <span className="text-[#ff5100] font-black">30,000+</span> <span className="font-black text-[#1E1E1E]">Happy Buyers</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[#555] font-medium lg:text-left md:mt-12 md:max-w-[380px]">
            Real taste, fresh delivery, and food you can trust — that's why customers keep coming back
          </p>
          </div>

          
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="flex flex-col justify-between border border-white bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <span className="mb-4 block font-serif text-[50px] font-black leading-none text-[#1e1e1e]">
                  “
                </span>
                <p className="mb-8 text-[15px] leading-relaxed text-[#484848] font-medium">
                  {review.text}
                </p>
              </div>

              <div className="flex items-end justify-between mt-auto">
                <div className="flex flex-col gap-2">
                  <div className="flex text-[18px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={star <= review.rating ? "text-[#ff5100]" : "text-[#d1d1d1]"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <h3 className="text-[14.5px] font-semibold text-[#1e1f20]">
                    {review.name}
                  </h3>
                </div>
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="h-10 w-10 md:h-[46px] md:w-[46px] rounded-full object-cover shadow-sm bg-gray-100"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <button className="flex items-center justify-center rounded-full bg-[#242424] px-8 py-3 text-sm font-medium text-white shadow-md transition hover:bg-[#3a3a3a]">
            Write an review
          </button>

          <div className="flex gap-4">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b8b8b8] bg-transparent text-[#1e1e1e] transition hover:bg-white hover:shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b8b8b8] bg-transparent text-[#1e1e1e] transition hover:bg-white hover:shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
