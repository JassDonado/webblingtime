export type CartItem = {
  reference: string;
  price: string;
  quantity: number;
  category: "Reloj" | "Perfume";
};

export const CART_STORAGE_KEY = "blingtime-cart";
export const CART_UPDATED_EVENT = "blingtime-cart-updated";

export function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  } catch {
    return [];
  }
}

export function addToCart(item: Omit<CartItem, "quantity">) {
  const cart = readCart();
  const existingItem = cart.find((cartItem) => cartItem.reference === item.reference);
  const updatedCart = existingItem
    ? cart.map((cartItem) => cartItem.reference === item.reference
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem)
    : [...cart, { ...item, quantity: 1 }];

  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
  window.dispatchEvent(new Event(CART_UPDATED_EVENT));
}

export function removeFromCart(reference: string) {
  const updatedCart = readCart().filter((item) => item.reference !== reference);
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
  window.dispatchEvent(new Event(CART_UPDATED_EVENT));
}