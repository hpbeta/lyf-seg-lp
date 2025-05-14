import { useState, useEffect } from "react";
import { Menu, X, HardHat } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <HardHat className="h-8 w-8 text-green-600 mr-2" />
            <span className="font-bold text-xl md:text-2xl text-green-700">
              LYF SEG
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#hero"
              className=" hover:text-green-600 font-medium transition-colors"
            >
              Sobre Nós
            </a>
            <a
              href="#servicing"
              className=" hover:text-green-600 font-medium transition-colors"
            >
              Serviços
            </a>
            <a
              href="#benefits"
              className=" hover:text-green-600 font-medium transition-colors"
            >
              Benefícios
            </a>
            <a
              href="https://wa.me/5511987346937"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600  px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Contato
            </a>
          </nav>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white w-full mt-2 py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a
              href="#about"
              className="text-gray-800 hover:text-green-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </a>
            <a
              href="#services"
              className="text-gray-800 hover:text-green-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#benefits"
              className="text-gray-800 hover:text-green-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a
              href="#contact"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
