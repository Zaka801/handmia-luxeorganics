import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const CART_STORAGE_KEY = 'hmia-cart-v1';

const readStoredCart = () => {
  if (typeof window === 'undefined') return [];

  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) return [];

    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const snapshotProduct = (product) => ({
  id: product.id,
  image: product.image,
  link: product.link,
  name: product.name,
  price: product.price,
});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(readStoredCart);
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product, quantity = 1) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: Math.min(item.quantity + quantity, 99) } : item,
        );
      }

      return [...current, { ...snapshotProduct(product), quantity }];
    });

    setCartOpen(true);
  };

  const updateQuantity = (productId, quantity) => {
    const nextQuantity = Number(quantity);

    setItems((current) =>
      current
        .map((item) => (item.id === productId ? { ...item, quantity: Math.max(1, Math.min(nextQuantity, 99)) } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (productId) => {
    setItems((current) => current.filter((item) => item.id !== productId));
  };

  const clearCart = () => setItems([]);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const value = useMemo(
    () => ({
      addItem,
      clearCart,
      closeCart: () => setCartOpen(false),
      isCartOpen,
      itemCount,
      items,
      openCart: () => setCartOpen(true),
      removeItem,
      subtotal,
      updateQuantity,
    }),
    [isCartOpen, itemCount, items, subtotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');

  return context;
};
