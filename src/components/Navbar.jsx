import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Group 1.png";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Benefits", path: "/benefits" },
    { name: "Products", path: "/products" },
    { name: "Reviews", path: "/reviews" },
    { name: "FAQs", path: "/faqs" },
  ];

  return (
    <nav className="absolute left-0 top-7 z-20 w-full bg-transparent">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center gap-1 font-extrabold text-2xl text-white"
          >
            <img
              src={logo}
              alt="AgriHouse logo"
              className="h-12 w-12 object-contain"
            />
            <span>AgriHouse</span>
          </NavLink>

          <div className="hidden md:flex h-12 flex-1 max-w-2xl items-center justify-center gap-8 rounded-4xl border border-white px-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-full transition-all duration-300 text-sm font-medium ${
                    isActive
                      ? "bg-black text-white" // Black background when active
                      : "text-white/80 hover:text-white hover:bg-white/10" // Transparent/hover state
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <NavLink
            to="/login"
            className="rounded-full bg-gray-900 px-5 py-2 font-bold text-white transition hover:bg-gray-700"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
