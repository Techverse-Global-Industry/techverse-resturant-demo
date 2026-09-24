import type { ReactNode } from "react";
"use client";
import { createContext, useContext } from "react";
import { useCart } from "@/lib/cart-store";

type CartContextValue = ReturnType<typeof useCart>;
const CartContext = createContext<CartContextValue | null>(null);
export function CartProvider({children}:{children:ReactNode}) { const cart=useCart(); return <CartContext.Provider value={cart}>{children}</CartContext.Provider>; }
export function useCartContext(){ const ctx=useContext(CartContext); if(!ctx) throw new Error("useCartContext must be used inside CartProvider"); return ctx; }
