'use client';

import { ShoppingCartPlus, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { CART_UPDATED_EVENT, readCart, removeFromCart, type CartItem } from '../lib/cart';

const WHATSAPP_BUSINESS_NUMBER = '3245030090';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartMounted, setIsCartMounted] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const cartPanelRef = useRef<HTMLElement>(null);
  const cartTriggerRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    const updateCart = () => setCart(readCart());
    updateCart();
    window.addEventListener(CART_UPDATED_EVENT, updateCart);
    return () => window.removeEventListener(CART_UPDATED_EVENT, updateCart);
  }, []);

  useEffect(() => {
    if (!isCartOpen) return;

    const handleOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node;
      const clickedPanel = cartPanelRef.current?.contains(target);
      const clickedTrigger = cartTriggerRef.current?.contains(target);

      if (!clickedPanel && !clickedTrigger) {
        setIsCartOpen(false);
        window.setTimeout(() => setIsCartMounted(false), 260);
      }
    };

    document.addEventListener('pointerdown', handleOutsideClick);
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, [isCartOpen]);

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + Number(item.price.replace(/[^\d,]/g, '').replace(',', '.')) * item.quantity, 0);
  const checkout = () => {
    const products = cart.map((item) => `${item.category}: ${item.reference} | ${item.price} | Cantidad: ${item.quantity}`).join('\n');
    const message = `Hola, quiero realizar este pedido:\n${products}\nTotal: € ${cartTotal.toFixed(2)}`;
    window.open(`https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };
  const toggleCart = () => {
    if (isCartOpen) {
      setIsCartOpen(false);
      window.setTimeout(() => setIsCartMounted(false), 260);
      return;
    }

    setIsCartMounted(true);
    window.requestAnimationFrame(() => setIsCartOpen(true));
  };

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
          <Link href="/" className="font-bold text-lg text-gray-900 inline-block">
            BlingTime & Perfum
          </Link>
        </div>

        {/* NAVEGACIÓN - Centro (Se oculta al hacer scroll) */}
        {!isScrolled && (
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-gray-800">
            <a href="/catalogo/reloj" className="hover:text-amber-700 transition-colors">relojes</a>
            <a href="/catalogo/perfume" className="hover:text-amber-700 transition-colors">Perfumes</a>
            <a href="#contacto" className="hover:text-amber-700 transition-colors">Contactanos</a>
            <a href="#nosotros" className="hover:text-amber-700 transition-colors">nosotros</a>
          </nav>
        )}

        {/* CARRITO - Extremo Derecho */}
        <div className="flex-1 flex justify-end">
          <button ref={cartTriggerRef} type="button" className="cart-trigger" onClick={toggleCart} aria-label="Abrir carrito" aria-expanded={isCartOpen}>
            <ShoppingCartPlus className="w-6 h-6 text-gray-900" />
            <span className="bg-gray-200/80 text-gray-800 text-xs font-bold px-2 py-0.5 rounded-full">
              {itemCount}
            </span>
          </button>
        </div>
      </div>
      {isCartMounted && (
        <aside ref={cartPanelRef} className={`cart-panel ${isCartOpen ? 'cart-panel-open' : 'cart-panel-closing'}`} aria-label="Carrito de compras">
          <div className="cart-panel-heading">
            <h2>Tu carrito</h2>
            <button type="button" onClick={toggleCart} aria-label="Cerrar carrito"><X size={18} /></button>
          </div>
          {cart.length === 0 ? <p className="cart-empty">Todavía no has añadido productos.</p> : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div className="cart-item" key={item.reference}>
                    <div><strong>{item.reference}</strong><span>{item.category} · {item.price} · Cantidad: {item.quantity}</span></div>
                    <button type="button" onClick={() => removeFromCart(item.reference)} aria-label={`Eliminar ${item.reference}`}><X size={15} /></button>
                  </div>
                ))}
              </div>
              <div className="cart-total"><span>Total</span><strong>€ {cartTotal.toFixed(2)}</strong></div>
              <button type="button" className="cart-checkout" onClick={checkout}>Pagar</button>
            </>
          )}
        </aside>
      )}
    </header>
  );
}