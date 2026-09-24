"use client";
import { useEffect, useMemo, useState } from "react";
import type { CartLine } from "./types";
import { dishes } from "./data";

const KEY = "ritas-kitchen-cart";

export function useCart() {
  const [lines,setLines] = useState<CartLine[]>([]);
  useEffect(() => { try { const raw = localStorage.getItem(KEY); if (raw) setLines(JSON.parse(raw) as CartLine[]); } catch {} },[]);
  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(lines)); },[lines]);
  const add = (dishId:string) => setLines(prev => { const found=prev.find(x=>x.dishId===dishId); return found ? prev.map(x=>x.dishId===dishId?{...x,quantity:x.quantity+1}:x) : [...prev,{dishId,quantity:1}]; });
  const decrement = (dishId:string) => setLines(prev => prev.flatMap(x => x.dishId!==dishId?x:x.quantity>1?[{...x,quantity:x.quantity-1}]:[]));
  const remove = (dishId:string) => setLines(prev=>prev.filter(x=>x.dishId!==dishId));
  const clear = () => setLines([]);
  const items = useMemo(()=>lines.map(line=>({line,dish:dishes.find(d=>d.id===line.dishId)!})).filter(x=>Boolean(x.dish)),[lines]);
  const subtotal = useMemo(()=>items.reduce((sum,{line,dish})=>sum+dish.price*line.quantity,0),[items]);
  const count = useMemo(()=>lines.reduce((sum,l)=>sum+l.quantity,0),[lines]);
  return {lines,items,subtotal,count,add,decrement,remove,clear};
}
