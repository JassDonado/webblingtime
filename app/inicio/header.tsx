'use client';

import { useState, useEffect } from 'react';
import { ShoppingCartPlus } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'fixed bg-[#f3efe6]/70 backdrop-blur-md shadow-sm border-b border-white/20 py-3'
          : 'relative bg-[#f3efe6] py-5 border-b border-black/10'
      }`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between">
        {/* MARCA - Extremo Izquierdo */}
        <div className="flex-1 text-left">
          <a href="#inicio" className="font-bold text-lg text-gray-900 inline-block">
            BlingTime & Perfum
          </a>
        </div>

        {/* NAVEGACIÓN - Centro (Se oculta al hacer scroll) */}
        {!isScrolled && (
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-gray-800">
            <a href="#relojes" className="hover:text-amber-700 transition-colors">relojes</a>
            <a href="#perfumes" className="hover:text-amber-700 transition-colors">Perfumes</a>
            <a href="#contacto" className="hover:text-amber-700 transition-colors">Contactanos</a>
            <a href="#nosotros" className="hover:text-amber-700 transition-colors">nosotros</a>
          </nav>
        )}

        {/* CARRITO - Extremo Derecho */}
        <div className="flex-1 flex justify-end">
          <a href="#relojes" className="flex items-center gap-2">
            <ShoppingCartPlus className="w-6 h-6 text-gray-900" />
            <span className="bg-gray-200/80 text-gray-800 text-xs font-bold px-2 py-0.5 rounded-full">
              0
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}