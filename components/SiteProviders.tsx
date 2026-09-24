import type { ReactNode } from "react";
"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { CartProvider } from "./cart-provider";

export function SiteProviders({children}:{children:ReactNode}) {
  useEffect(()=>{ const lenis=new Lenis({autoRaf:true}); return ()=>lenis.destroy(); },[]);
  return <CartProvider>{children}</CartProvider>;
}
