import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock3, MapPin, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DishCard } from "@/components/DishCard";
import { dishes } from "@/lib/data";

export default function Home() {
  const featured = dishes.filter((d) => d.featured);
  return (
    <>
      <main>
        <section className="noise relative min-h-[calc(100vh-80px)] overflow-hidden">
          <Image
            src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/restaurant_bg.png"
            alt="TechVerse Demo dining room"
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="section-shell relative z-10 grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_.9fr]">
            <Reveal>
              <div>
                <div className="kicker flex items-center gap-2">
                  <Sparkles size={13} className="text-[#d9a35f]" /> Fine dining
                  · Cotonou
                </div>
                <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[.95] sm:text-6xl md:text-8xl">
                  Exceptional <span className="gold-text">flavour</span>,
                  quietly unforgettable.
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-7 text-[#c4beb5] md:text-lg">
                  Benin-born ingredients meet modern French technique in a
                  dining room designed for long evenings, beautiful plates and
                  warm hospitality.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link className="btn btn-gold" href="/menu">
                    Explore the menu <ArrowUpRight size={17} />
                  </Link>
                  <Link className="btn btn-ghost" href="/checkout">
                    Start an order
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-5 text-sm text-[#a9a39a]">
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={15} />
                    Cadjèhoun, Cotonou
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 size={15} />
                    12:00–23:00 daily
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mx-auto w-full max-w-[460px]">
                <div className="glass gold-glow overflow-hidden rounded-[30px] p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                    <video
                      className="absolute inset-0 h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
                    >
                      <source
                        src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_food_video.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute inset-x-5 bottom-5">
                      <div className="kicker">Chef's special</div>
                      <div className="mt-1 font-serif text-3xl">
                        Truffle Wagyu Ribeye
                      </div>
                      <div className="mt-2 text-sm text-white/70">
                        Charred wagyu · black truffle jus · pommes anna
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        <section className="section-shell py-24">
          <Reveal>
            <div className="max-w-3xl">
              <div className="kicker">The table</div>
              <h2 className="mt-4 font-serif text-4xl md:text-6xl">
                A menu that rewards curiosity.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#a9a39a]">
                From first bite to last pour, every plate is built to feel
                familiar and surprising at the same time.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featured.map((dish, i) => (
              <Reveal key={dish.id} delay={i * 0.05}>
                <DishCard dish={dish} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link className="btn btn-ghost" href="/menu">
              View the full catalogue <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
        <section className="border-y border-white/10 bg-[#0a0a0a] py-24">
          <div className="section-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <Reveal>
              <div>
                <div className="kicker">Seven-course tasting</div>
                <h2 className="mt-4 font-serif text-5xl">
                  A slower way to dine.
                </h2>
                <p className="mt-5 max-w-lg text-[#a9a39a] leading-7">
                  A progression of seafood, charred meats, garden flavours and
                  dessert, paced for the room rather than the clock.
                </p>
                <Link href="/menu" className="btn btn-gold mt-7">
                  See tasting menu
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Garden / coconut / herb oil",
                  "Scallop / citrus / cauliflower",
                  "Wagyu / truffle / shallot",
                  "Cocoa / vanilla / sea salt",
                ].map((x, i) => (
                  <div key={x} className="glass rounded-2xl p-5">
                    <div className="text-xs text-[#d9a35f]">0{i + 1}</div>
                    <div className="mt-3 font-medium">{x}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
        <section className="section-shell py-24">
          <Reveal>
            <div className="card overflow-hidden p-8 md:p-12">
              <div className="grid gap-10 md:grid-cols-[1fr_.9fr] md:items-center">
                <div>
                  <div className="kicker">Reservations</div>
                  <h2 className="mt-4 font-serif text-5xl">
                    Save a place at the table.
                  </h2>
                  <p className="mt-5 max-w-xl leading-7 text-[#a9a39a]">
                    Choose your evening, tell us what matters, and arrive
                    knowing every detail is ready.
                  </p>
                  <Link href="/account" className="btn btn-gold mt-7">
                    Reserve a table
                  </Link>
                </div>
                <div className="rounded-3xl bg-[radial-gradient(circle_at_top,rgba(217,163,95,.22),transparent_52%),#111] p-7">
                  <div className="kicker">Tonight</div>
                  <div className="mt-2 font-serif text-3xl">
                    Tables for 2–6 guests
                  </div>
                  <div className="mt-6 space-y-3 text-sm text-[#b9b2a8]">
                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span>12:30</span>
                      <span>Available</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span>19:30</span>
                      <span>2 tables</span>
                    </div>
                    <div className="flex justify-between">
                      <span>21:15</span>
                      <span>Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
