import Link from "next/link";
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090909] py-14">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">
        <div>
          <div className="font-serif text-xl sm:text-2xl">TechVerse Demo</div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#9a948b]">
            A refined dining room where Benin ingredients, French technique and
            warm hospitality meet.
          </p>
        </div>
        <div>
          <div className="kicker">Explore</div>
          <div className="mt-4 grid gap-2 text-sm text-[#bdbdbd]">
            <Link href="/menu">Full menu</Link>
            <Link href="/account">Guest account</Link>
            <Link href="/checkout">Checkout</Link>
          </div>
        </div>
        <div>
          <div className="kicker">Restaurant</div>
          <div className="mt-4 grid gap-2 text-sm text-[#bdbdbd]">
            <span>Cadjèhoun, Cotonou</span>
            <span>+229 21 30 10 10</span>
            <span>Open daily · 12:00–23:00</span>
          </div>
        </div>
        <div>
          <div className="kicker">Experience</div>
          <div className="mt-4 grid gap-2 text-sm text-[#bdbdbd]">
            <Link href="/admin">Operations demo</Link>
            <Link href="/delivery">Delivery console</Link>
            <Link href="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
