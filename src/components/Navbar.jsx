import React from "react";
import logo from "../assets/Group 1.png";

const Navbar = () => {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Benefits", id: "benefits" },
    { name: "Products", id: "products" },
    { name: "Reviews", id: "reviews" },
    { name: "FAQs", id: "faqs" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="absolute left-0 top-0 z-50 w-full py-4 bg-transparent">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-1 font-extrabold text-2xl text-white cursor-pointer"
          >
            <img
              src={logo}
              alt="AgriHouse logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-white">AgriHouse</span>
          </button>

          <div className="hidden h-12 shrink-0 items-center gap-3 rounded-full border border-white/30 bg-white/10 px-3 shadow-lg backdrop-blur-md md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex h-10 items-center rounded-full px-5 transition-all duration-300 text-[20px] text-[#1E1E1E] hover:text-white hover:bg-gray-900 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            className="rounded-full bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700"
          >
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
