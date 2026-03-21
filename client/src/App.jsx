import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Branches from "./pages/Branches";
import About from "./pages/About";
import Facilities from "./components/facilities"; 
import BranchDetails from "./pages/BranchDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<div>Gallery</div>} />
        <Route path="/branches/:id" element={<BranchDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
