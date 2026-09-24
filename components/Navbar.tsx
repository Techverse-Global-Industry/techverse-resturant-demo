"use client";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCartContext } from "./cart-provider";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/order/RK-1042", label: "Track Order" },
  { href: "/account", label: "Account" },
];
export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const { count } = useCartContext();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070707]/80 backdrop-blur-2xl">
      <div className="section-shell flex min-h-20 items-center justify-between gap-3 sm:gap-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#d9a35f]/40 bg-[#d9a35f]/10 font-serif text-sm text-[#d9a35f] sm:h-10 sm:w-10">
            T
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-sm sm:text-lg">
              TechVerse Demo
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.18em] text-[#a9a39a] sm:block">
              Cotonou · Benin
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              className={`nav-link text-sm ${path === l.href ? "active" : ""}`}
              href={l.href}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/checkout" className="btn btn-ghost relative">
            <ShoppingBag size={17} />
            <span className="hidden sm:inline">{count}</span>
            {count > 0 ? (
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-[#d9a35f] text-[10px] font-black text-black">
                {count}
              </span>
            ) : null}
          </Link>
          <button
            className="btn btn-ghost md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-[#0a0a0a] md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              onClick={() => setOpen(false)}
              href={l.href}
              className="block border-b border-white/10 px-5 py-4 text-sm text-[#c9c4bb]"
            >
              {l.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
