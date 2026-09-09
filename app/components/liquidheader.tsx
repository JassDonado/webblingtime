'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCartPlus } from 'lucide-react'; // O tu ícono de carrito actual

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Activa el modo fijo tras desplazar 50px
      if (window.scrollY > 50) {
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
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'fixed bg-white/70 backdrop-blur-md border-b border-white/20 shadow-lg py-3'
          : 'relative bg-[#F5F2EB] py-5 border-b border-black/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO / NOMBRE DE LA MARCA */}
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          BlingTime & Perfum
        </Link>

        {/* MENÚ DE NAVEGACIÓN (Se oculta al hacer scroll) */}
        <nav
          className={`hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-gray-800 uppercase transition-all duration-300 ${
            isScrolled ? 'opacity-0 pointer-events-none hidden' : 'opacity-100'
          }`}
        >
          <Link href="/relojes" className="hover:text-amber-700 transition-colors">
            Relojes
          </Link>
          <Link href="/perfumes" className="hover:text-amber-700 transition-colors">
            Perfumes
          </Link>
          <Link href="/contactanos" className="hover:text-amber-700 transition-colors">
            Contáctanos
          </Link>
          <Link href="/nosotros" className="hover:text-amber-700 transition-colors">
            Nosotros
          </Link>
        </nav>

        {/* CARRITO DE COMPRAS */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Carrito de compras"
            className="flex items-center gap-2 p-2 rounded-full hover:bg-black/5 transition-colors"
          >
            <ShoppingCartPlus className="w-5 h-5 text-gray-900" />
            <span className="bg-gray-200 text-gray-800 text-xs font-bold px-2 py-0.5 rounded-full">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}