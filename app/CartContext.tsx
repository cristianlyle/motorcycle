import React, { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<{ id: string; name: string; price: number; image: string }[]>([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item: { id: string; name: string; price: number; image: string }) => {
    setCart((prev) => [...prev, item]);
    setTotal((prev) => prev + item.price);
  };

  return (
    <CartContext.Provider value={{ cart, total, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}