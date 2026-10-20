export type CartItem = {
  reference: string;
  price: number;
  quantity: number;
  category: "Reloj" | "Perfume";
};

export const CART_STORAGE_KEY = "blingtime-cart";
export const CART_UPDATED_EVENT = "blingtime-cart-updated";

export const formatCop = (value: number) => new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
}).format(value);

export function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];
    if (!Array.isArray(parsedCart)) return [];

    return parsedCart
      .filter((item): item is Omit<CartItem, "price"> & { price: number | string } => (
        item && typeof item.reference === "string" &&
        typeof item.quantity === "number" &&
        (typeof item.price === "number" || typeof item.price === "string")
      ))
      .map((item) => ({
        ...item,
        price: typeof item.price === "number"
          ? item.price
          : Number(item.price.replace(/[^\d]/g, "")),
      }))
      .filter((item) => Number.isFinite(item.price));
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