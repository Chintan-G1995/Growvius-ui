import { useEffect } from "react";
import logo from "../../assets/brand-logo.png";

export default function Header() {
  useEffect(() => {
    const onScroll = () => {
      const header = document.getElementById("header");
      header.classList.toggle("bg-white", window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="header"
      className="fixed top-0 w-full bg-white/95 backdrop-blur border-b border-gray-200 z-50"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">Growvius
          {/* <img 
            src={logo}
            alt="Growvius Logo" 
            className="h-16 w-48 object-contain"
            style={{ height: '64px', width: '192px' }}
          /> */}
        </div>
        <ul className="hidden md:flex gap-8">
          {["home", "services", "solutions", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="text-[#334155] hover:text-[#2563EB] transition">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="bg-[#2563EB] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#1D4ED8] transition"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
