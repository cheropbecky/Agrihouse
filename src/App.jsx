import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Loader always mounts first */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Site renders in background immediately so all assets (images, fonts)
          start fetching. Hidden until loader exits. */}
      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
