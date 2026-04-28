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
        {/* Optional: Redirect other paths to home if they are no longer needed as separate pages */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
