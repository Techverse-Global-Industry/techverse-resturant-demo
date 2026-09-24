export type Category = "Starters" | "Mains" | "Desserts" | "Wine";
export type OrderStatus = "pending_payment" | "confirmed" | "preparing" | "ready_for_pickup" | "out_for_delivery" | "delivered";
export type DeliveryStatus = "unassigned" | "assigned" | "picked_up" | "on_the_way" | "delivered";

export interface Dish { id:string; name:string; category:Category; price:number; description:string; image:string; featured?:boolean; spicy?:boolean }
export interface CartLine { dishId:string; quantity:number }
export interface Order { id:string; customerName:string; phone:string; address:string; items:CartLine[]; status:OrderStatus; paymentMethod:"FedaPay"|"Pay at table"; createdAt:string; deliveryFee:number }
export interface Customer { id:string; name:string; email:string; phone:string; orders:number; spend:number; lastOrder:string; segment:"New"|"Returning"|"VIP" }
export interface Driver { id:string; name:string; phone:string; status:"Available"|"Delivering"|"Offline"; zone:string; rating:number; deliveries:number; lat:number; lng:number }
