import React from "react";
import benefitsBg from "../assets/benefitsBg.png";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Samantha R.",
      role: "Fitness Coach",
      initials: "SR",
      text: "The quality is unreal. You can taste the difference immediately, and delivery is always fresh and on time.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael T.",
      role: "Restaurant Owner",
      initials: "MT",
      text: "AgriHouse products helped us upgrade our menu. Customers keep asking where our ingredients come from.",
      rating: 5,
    },
    {
      id: 3,
      name: "Aisha K.",
      role: "Nutritionist",
      initials: "AK",
      text: "Clean, natural, and reliable. It's hard to find farm products this fresh and consistently high quality.",
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
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-5 inline-flex rounded-full bg-[#ff5a14] px-6 py-2 text-sm font-semibold text-white">
              Reviews
            </span>
            <h2 className="text-[42px] font-black leading-[1.05] tracking-tight text-[#1e1f20] sm:text-[54px]">
              What Our <span className="text-[#ff5a14]">Customers</span>
              <br />
              Say About Us
            </h2>
          </div>
          <p className="max-w-[330px] text-base leading-relaxed text-[#525252] md:text-right">
            Real feedback from people who trust AgriHouse for fresh, naturally
            grown farm products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-[24px] border border-white/50 bg-white/75 p-6 shadow-lg backdrop-blur-sm"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[#1f1f1f] text-sm font-bold text-white">
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1f1f1f]">
                      {review.name}
                    </h3>
                    <p className="text-sm text-[#6a6a6a]">{review.role}</p>
                  </div>
                </div>
                <span className="text-3xl leading-none text-[#ff5a14]">“</span>
              </div>

              <p className="mb-5 text-[15px] leading-relaxed text-[#484848]">
                {review.text}
              </p>

              <div className="text-sm tracking-[3px] text-[#ff5a14]">
                {"★".repeat(review.rating)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
