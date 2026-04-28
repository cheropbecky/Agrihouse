import React from "react";
import logo from "../assets/Group 1.png";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#17181c] px-4 py-24 text-white sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="AgriHouse logo" className="h-10 w-10 object-contain" />
              <span className="text-3xl font-medium text-white">AgriHouse</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-4">
            <div>
              <p className="mb-4 text-sm font-semibold tracking-wider text-[#9fa3ad] uppercase">Navigation</p>
              <ul className="space-y-3 text-base text-[#f0f0f0]">
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Homepage</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Benefits</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Our Products</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Reviews</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">About Us</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">FAQ</li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold tracking-wider text-[#9fa3ad] uppercase">Resources</p>
              <ul className="space-y-3 text-base text-[#f0f0f0]">
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Blog</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Events</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Help Center</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Tutorials</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Support</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Contact</li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold tracking-wider text-[#9fa3ad] uppercase">Socials</p>
              <ul className="space-y-3 text-base text-[#f0f0f0]">
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Instagram</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Facebook</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">TikTok</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">YouTube</li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold tracking-wider text-[#9fa3ad] uppercase">Legal</p>
              <ul className="space-y-3 text-base text-[#f0f0f0]">
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Terms</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Privacy</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Cookies</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Licenses</li>
                <li className="cursor-pointer hover:text-[#ff5a14] transition-colors">Setting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="select-none text-center leading-none mt-12 md:mt-16">
          <p className="flex items-end justify-center gap-1 text-[110px] font-black tracking-tight md:text-[180px]">
            <span className="bg-gradient-to-b from-white to-[#484848] bg-clip-text text-transparent">A</span>
            <span className="bg-gradient-to-b from-[#ff5a14] to-[#1f1f1f] bg-clip-text text-transparent">G</span>
            <span className="bg-gradient-to-b from-white to-[#484848] bg-clip-text text-transparent">R</span>
            <span className="bg-gradient-to-b from-white to-[#484848] bg-clip-text text-transparent">I</span>
            <span className="bg-gradient-to-b from-[#ff5a14] to-[#1f1f1f] bg-clip-text text-transparent">H</span>
            <span className="relative inline-flex h-[0.9em] w-[0.9em] items-center justify-center rounded-full border-[0.14em] border-[#2e2f34] bg-gradient-to-b from-white to-[#22252b]">
              <img src={logo} alt="" aria-hidden="true" className="h-[0.34em] w-[0.34em] object-contain" />
            </span>
            <span className="bg-gradient-to-b from-white to-[#484848] bg-clip-text text-transparent">U</span>
            <span className="bg-gradient-to-b from-white to-[#484848] bg-clip-text text-transparent">S</span>
            <span className="bg-gradient-to-b from-white to-[#484848] bg-clip-text text-transparent">E</span>
          </p>
        </div>

        <p className="mt-8 md:mt-12 text-center text-sm text-[#a3a3a3]">
          © 2026 AgriHouse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
