"use client";
import { useMemo, useState } from "react";
import { dishes } from "@/lib/data";
import type { Category } from "@/lib/types";
import { DishCard } from "@/components/DishCard";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
const cats: (Category|"All")[]=["All","Starters","Mains","Desserts","Wine"];
export default function Menu(){const [cat,setCat]=useState<Category|"All">("All");const [q,setQ]=useState("");const filtered=useMemo(()=>dishes.filter(d=>(cat==="All"||d.category===cat)&&d.name.toLowerCase().includes(q.toLowerCase())),[cat,q]);return <><main className="section-shell py-16 md:py-24"><Reveal><div className="max-w-4xl"><div className="kicker">Full catalogue</div><h1 className="mt-4 font-serif text-6xl md:text-8xl">The Menu</h1><p className="mt-6 max-w-2xl text-[#a9a39a] leading-7">Seasonal plates, signatures from the fire, delicate desserts and a sommelier-led cellar selection.</p></div></Reveal><div className="sticky top-[80px] z-30 mt-10 flex flex-col gap-4 border-y border-white/10 bg-[#070707]/90 py-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between"><div className="flex gap-2 overflow-x-auto">{cats.map(c=><button key={c} onClick={()=>setCat(c)} className={`rounded-full px-4 py-2 text-sm ${cat===c?"bg-[#d9a35f] text-black":"bg-white/5 text-[#bdbdbd]"}`}>{c}</button>)}</div><input className="field max-w-xs" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search dishes…"/></div><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtered.map((dish,i)=><Reveal key={dish.id} delay={(i%3)*.05}><DishCard dish={dish}/></Reveal>)}</div></main><Footer/></>}
