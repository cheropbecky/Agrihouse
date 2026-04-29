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
            <div className="max-w-[1600px] mx-auto w-full">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <div className="max-w-3xl">
                        <div className="bg-[#ff5100] text-white px-8 py-3 md:px-10 md:py-3.5 rounded-full inline-block font- mb-6 md:mb-8 text-xl tracking-wide">
                            Benefits
                        </div>
                        <h2 className="leading-[1.1] text-[#1E1E1E] tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'Poppins, sans-serif' }}>
                            <span className="text-[#ff5100] font-black">Why</span><span className="text-[#1E1E1E] font-bold"> Choose Our</span> <br /> <span className="text-[#1E1E1E] font-black">Farm</span> <span className="font-normal text-[#1E1E1E]">Products</span>
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-sm md:max-w-md lg:max-w-lg lg:text-left font-medium leading-relaxed">
                        Trusted by athletes and health-conscious customers who choose real, chemical-free food every day
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
                    <img src={card1} alt="100% Natural Products" className="h-auto w-full rounded-[2rem] shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-xl" />
                    <img src={card2} alt="Trusted by Active People" className="h-auto w-full rounded-[2rem] shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-xl" />
                    <img src={card3} alt="Rich in Natural Nutrients" className="h-auto w-full rounded-[2rem] shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-xl" />
                    <img src={card4} alt="Clean and Safe Farming" className="h-auto w-full rounded-[2rem] shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-xl" />
                </div>
            </div>
        </section>
    );
}
