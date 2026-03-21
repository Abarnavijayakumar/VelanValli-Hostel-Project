import { MapPin, Home, ShieldCheck } from "lucide-react";
import heroImg from "../assets/hero-room.jpg";

function Hero() {
  return (
    <section className="relative bg-white">

      {/* 🔹 TOP LIGHT GRADIENT */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-purple-100 via-pink-50 to-transparent -z-10"></div>

      {/* 🔹 HERO CONTENT */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">

        {/* 🔹 LEFT TEXT */}
        <div className="text-center md:text-left">
          <p className="text-[#1F2937] text-xl font-medium mb-3">
            Welcome to
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            <span className="text-[#D946EF]">Valli</span>{" "}
            <span className="text-[#1F2937]">Women's Hostel</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 font-light">
            Safe. Secure. Comfortable Living.
          </p>

          {/* 🔹 BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 justify-center md:justify-start">
            
            <button className="bg-[#9333EA] hover:bg-purple-700 text-white px-7 py-3 rounded-xl shadow-md transition">
              Book Now
            </button>

            <button className="border border-[#9333EA] text-[#9333EA] px-7 py-3 rounded-xl hover:bg-purple-50 transition">
              View Rooms
            </button>

          </div>
        </div>

        {/* 🔹 RIGHT IMAGE (CLIP PATH CURVE) */}
        <div className="relative w-full h-[320px] md:h-[420px]">
          <img
            src={heroImg}
            alt="Hostel Room"
            className="w-full h-full object-cover"
            style={{
              clipPath:
                "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 15%)",
              borderRadius: "40px",
            }}
          />
        </div>

      </div>

      {/* 🔹 FEATURE CARDS */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full">
            <MapPin size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              24/7 Security
            </h3>
            <p className="text-gray-500 text-sm">
              Ensuring your safety at all times.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full">
            <Home size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Modern Facilities
            </h3>
            <p className="text-gray-500 text-sm">
              Comfortable rooms with all essential amenities.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full">
            <MapPin size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Prime Location
            </h3>
            <p className="text-gray-500 text-sm">
              Conveniently located near city centers.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;