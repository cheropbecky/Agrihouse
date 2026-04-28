import React from "react";
import benefitsBg from "../assets/benefitsBg.png";
import card1 from "../assets/card benefit 1.png";
import card2 from "../assets/card benefit 2.png";
import card3 from "../assets/card benefit 3.png";
import card4 from "../assets/card benefit 4.png";

export default function Benefits() {
    return (
        <section
            id="benefits"
            className="relative w-full py-24 px-4 sm:px-6 lg:px-10"
            style={{ backgroundImage: `url(${benefitsBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="max-w-400 mx-auto w-full">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <div className="max-w-3xl">
                        <div className="bg-[#ff5100] text-white px-8 py-2.5 rounded-full inline-block font-bold mb-6 text-lg tracking-wide">
                            Benefits
                        </div>
                        <h2
                            className="leading-tight text-[#1E1E1E] tracking-tight"
                            style={{
                                fontSize: "clamp(60px, 8vw, 56px)",
                                fontWeight: 700,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            <span className="text-[#ff5100] font-bold">Why </span>
                            <span className="text-[#1E1E1E] font-black">Choose Our</span>
                            <br /> <span className="text-[#1E1E1E] font-black"> Farm </span>
                            <span className="font-light text-black">Products</span>
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 max-w-sm lg:text-left font-medium leading-relaxed">
                        Trusted by athletes and health-conscious customers who choose real, chemical-free food every day
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
                    <img src={card1} alt="100% Natural Products" className="h-auto w-full rounded-4xl shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-xl" />
                    <img src={card2} alt="Trusted by Active People" className="h-auto w-full rounded-4xl shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-xl" />
                    <img src={card3} alt="Rich in Natural Nutrients" className="h-auto w-full rounded-4xl shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-xl" />
                    <img src={card4} alt="Clean and Safe Farming" className="h-auto w-full rounded-4xl shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-xl" />
                </div>
            </div>
        </section>
    );
}
