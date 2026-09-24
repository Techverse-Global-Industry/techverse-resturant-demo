import Link from "next/link";
import { ArrowUpRight, ChefHat, PackageCheck, Truck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { customers, dishes, formatCFA, mockOrders } from "@/lib/data";
import { DashboardChart } from "@/components/DashboardChart";

type ServicePulse = { icon: LucideIcon; title: string; value: string; tone: string };
const servicePulse: ServicePulse[] = [
  { icon: ChefHat, title: "Kitchen", value: "3 preparing", tone: "text-[#f0bb79]" },
  { icon: Truck, title: "Delivery", value: "1 on route", tone: "text-[#87b8ff]" },
  { icon: PackageCheck, title: "Fulfilment", value: "11 today", tone: "text-[#8ad0a0]" },
  { icon: Users, title: "Customers", value: "62 active", tone: "text-[#d2b7f8]" },
];

export default function Admin() {
  const revenue = mockOrders.reduce((sum, order) => {
    const itemsTotal = order.items.reduce((itemSum, line) => {
      const dish = dishes.find((candidate) => candidate.id === line.dishId);
      return itemSum + (dish?.price ?? 0) * line.quantity;
    }, 0);
    return sum + itemsTotal + order.deliveryFee;
  }, 0);

  return (
    <main className="section-shell py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><div className="kicker">Operations</div><h1 className="mt-3 font-serif text-5xl">Restaurant command center.</h1></div>
        <div className="flex gap-2"><Link className="btn btn-ghost" href="/delivery">Delivery console</Link><Link className="btn btn-gold" href="/menu">Open menu</Link></div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {[
          ["Revenue today", formatCFA(revenue), "+18.4%"],
          ["Active orders", String(mockOrders.length), "2 in kitchen"],
          ["Customers", String(customers.length), "demo profiles"],
          ["Deliveries", "6", "1 delayed"],
        ].map(([label, value, note]) => (
          <div key={label} className="card p-5"><div className="kicker">{label}</div><div className="mt-3 text-2xl font-semibold">{value}</div><div className="mt-1 text-xs text-[#7f786f]">{note}</div></div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_.7fr]">
        <section className="card p-6"><div className="flex items-center justify-between"><div><div className="kicker">Revenue analytics</div><h2 className="mt-2 font-serif text-3xl">Last 7 days</h2></div><span className="rounded-full bg-white/5 px-3 py-1 text-xs text-[#9b958b]">Demo data</span></div><div className="mt-6"><DashboardChart /></div></section>
        <section className="card p-6"><div className="kicker">Service pulse</div><div className="mt-5 space-y-3">
          {servicePulse.map(({ icon: Icon, title, value, tone }) => (
            <div key={title} className="flex items-center gap-3 rounded-2xl bg-white/[.03] p-4"><Icon size={18} className={tone}/><div className="flex-1"><div className="text-sm font-semibold">{title}</div><div className="text-xs text-[#7e776d]">{value}</div></div><ArrowUpRight size={15} className="text-[#5f5951]"/></div>
          ))}
        </div></section>
      </div>

      <section className="mt-6 card overflow-hidden"><div className="border-b border-white/10 p-6"><div className="kicker">Order queue</div><h2 className="mt-2 font-serif text-3xl">Recent orders</h2></div><div className="overflow-x-auto"><table className="min-w-full text-left text-sm"><thead className="bg-white/[.02] text-[#7d766d]"><tr>{["Order","Customer","Status","Payment","Created"].map((heading) => <th key={heading} className="px-6 py-4 font-medium">{heading}</th>)}</tr></thead><tbody>{mockOrders.map((order) => <tr key={order.id} className="border-t border-white/10"><td className="px-6 py-4 font-semibold">{order.id}</td><td className="px-6 py-4 text-[#bbb5ac]">{order.customerName}</td><td className="px-6 py-4"><span className="rounded-full bg-[#d9a35f]/10 px-3 py-1 text-xs text-[#d9a35f]">{order.status.replaceAll("_", " ")}</span></td><td className="px-6 py-4 text-[#a39c92]">{order.paymentMethod}</td><td className="px-6 py-4 text-[#8b847b]">{new Date(order.createdAt).toLocaleTimeString("en-NG", { hour: "2-digit", minute: "2-digit" })}</td></tr>)}</tbody></table></div></section>
    </main>
  );
}
