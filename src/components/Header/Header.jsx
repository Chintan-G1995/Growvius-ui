import { useEffect, useState } from "react";
import logo from "../../assets/brand-logo.png";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg border-b border-gray-100"
          : "bg-white/80 backdrop-blur-md border-b border-gray-100/50"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center hover:opacity-80 transition">
          <img 
            src={logo}
            alt="Growvius Logo" 
            className="h-24 w-44 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 items-center">
          {["home", "services", "solutions", "contact"].map((item) => (
            <li key={item}>
              <a 
                href={`#${item}`} 
                className="text-[#334155] text-sm font-medium hover:text-[#2563EB] transition-colors relative group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563EB] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Get Started Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-[#2563EB] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#1D4ED8] hover:shadow-lg transition-all duration-300 text-sm"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#0F172A]"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {["home", "services", "solutions", "contact"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className="text-[#334155] text-sm font-medium hover:text-[#2563EB] transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-100">
              <a
                href="#contact"
                className="block bg-[#2563EB] text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-[#1D4ED8] transition-all duration-300 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}    </header>
  );
}