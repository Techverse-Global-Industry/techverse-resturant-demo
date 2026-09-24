"use client";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { revenueSeries, formatCFA } from "@/lib/data";
export function DashboardChart(){return <div className="h-[300px] w-full"><ResponsiveContainer width="100%" height="100%"><LineChart data={revenueSeries}><XAxis dataKey="day" stroke="#736d65" fontSize={12}/><YAxis stroke="#736d65" fontSize={12} tickFormatter={(v:number)=>`${Math.round(v/1000)}k`}/><Tooltip contentStyle={{background:"#101010",border:"1px solid rgba(255,255,255,.1)",borderRadius:14,color:"#fff"}} formatter={(value) => [formatCFA(Number(value ?? 0)), "Revenue"]}/><Line type="monotone" dataKey="revenue" stroke="#d9a35f" strokeWidth={3} dot={{r:3,fill:"#d9a35f"}}/></LineChart></ResponsiveContainer></div>}
