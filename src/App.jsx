import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
import OurProducts from "./pages/OurProducts";
import Reviews from "./pages/Reviews";
import FAQs from "./pages/FAQs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
