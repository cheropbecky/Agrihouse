import heroImage from "../assets/image 1 (1).png";
import badge from "../assets/Frame 774.png";
import Benefits from "./Benefits";
import About from "./About";
import OurProducts from "./OurProducts";
import Reviews from "./Reviews";
import FAQs from "./FAQs";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <main id="home" className="relative h-screen w-full overflow-hidden font-sans">

        <img
          src={heroImage}
          alt="Modern agriculture field"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-black/25 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[35%] bg-gradient-to-l from-black/15 to-transparent" />

        <div className="relative z-10 h-full w-full flex flex-col justify-center px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end w-full max-w-1600px mx-auto">
            <div className="relative lg:col-span-8 lg:-translate-y-10">
              <img
                src={badge}
                alt="badge"
                className="absolute -top-4 -left-10 h-20 w-20 p-3 shadow-lg"
              />
              <h1
                className="leading-[0.85] tracking-tighter text-white [font-weight:900]"
                style={{
                  fontSize: "clamp(50px, 8vw, 96px)",
                  fontWeight: 900,
                  fontFamily: "Urbanist, sans-serif",
                }}
              >
                Farm products <br />
                <span className="text-white/55 [font-weight:900]">without </span>{" "}
                <span className="text-[#1E1E1E] [font-weight:900]">pesticides</span>
                <br />
                — delivered fresh <br />
                by <span className="text-[#1E1E1E] [font-weight:900]">tomorrow</span>
              </h1>

              <div className="mt-12">
                <button
                  className="flex items-center h-15 gap-4 bg-[#1a1c1e] hover:bg-black text-white px-10 py-5 rounded-full transition-all text-lg font-medium group"
                  style={{ fontFamily: "Urbanist, sans-serif" }}
                >
                  Explore our product
                  <div className="bg-white rounded-full p-2 group-hover:translate-x-1 transition-transform">
                    <svg
                      className="w-5 h-5 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex justify-end italic bottom-20 lg:col-span-4 lg:translate-y-8">
              <p
                className="text-white italic text-xl md:text-2xl leading-tight max-w-[360px] text-left opacity-95"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span className="italic font-bold">Struggling</span> to find truly
                natural food for a{" "}
                <span className="italic font-bold">healthy lifestyle?</span>{" "}
                — We grow real farm products without chemicals — helping you eat
                better and enjoy the true taste of fresh food.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Benefits />
      <OurProducts />
      <Reviews />
      <About />
      <FAQs />
      <Footer />
    </>
  );
}
