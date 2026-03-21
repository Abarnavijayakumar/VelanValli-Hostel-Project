import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import valliLogo1 from "../assets/valli-logo1.png";
// import velanLogo from "../assets/velan-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Branches", path: "/branches" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* 🔹 TOP GRADIENT STRIP */}
      <div className="h-6 bg-gradient-to-r from-purple-300 via-pink-200 to-purple-200"></div>

      {/* 🔹 NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* 🔹 LOGO (PREMIUM DESIGN) */}
          <Link to="/" className="flex items-center">
            <div>
              {/* VALLI */}
              <img
                src={valliLogo1}
                alt="Valli"
                className="h-14 object-contain"
              />

              {/* PREMIUM CONNECTOR
              <div className="mx-3 w-7 h-7 flex items-center justify-center rounded-full 
                bg-gradient-to-r from-purple-500 to-pink-500 shadow-sm"> */}

              {/* Icon instead of & */}
              {/* <span className="text-white text-sm font-bold">
                  +
                </span>
              </div> */}

              {/* VELAN */}
              {/* <img
                src={velanLogo}
                alt="Velan"
                className="h-9 object-contain"
              /> */}
            </div>
          </Link>

          {/* 🔹 DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-gray-700  font-medium tracking-wide  transition duration-300 
                ${isActive(link.path) ? "text-purple-600" : "hover:text-purple-600"}`}
              >
                {link.name}

                {isActive(link.path) && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-600 rounded"></span>
                )}
              </Link>
            ))}
          </div>

          {/* 🔹 BUTTON */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-purple-800 to-pink-400 text-white font-medium px-6 py-2 rounded-full shadow hover:scale-105 hover:shadow-lg transition duration-300">
              Enquire Now
            </button>
          </div>

          {/* 🔹 MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* 🔹 MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-white px-6 pb-4 shadow">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-gray-700 font-medium ${
                    isActive(link.path) ? "text-purple-600" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <button className="mt-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full">
                Book Now
              </button>
            </div>
          </div> 
        )}
      </nav>
    </>
  );
}

export default Navbar;
