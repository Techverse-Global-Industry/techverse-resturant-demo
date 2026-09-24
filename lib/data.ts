import type { Customer, Dish, Driver, Order } from "./types";

export const dishes: Dish[] = [
  {id:"s1",name:"Burrata & Heirloom Tomato",category:"Starters",price:9500,description:"Creamy burrata, basil oil, aged balsamic and garden tomatoes.",image:"https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop",featured:true},
  {id:"s2",name:"Seared Scallops",category:"Starters",price:12000,description:"Hokkaido scallops, cauliflower silk, citrus beurre blanc.",image:"https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1200&auto=format&fit=crop",featured:true},
  {id:"m1",name:"Truffle Wagyu Ribeye",category:"Mains",price:42000,description:"Charred wagyu, black truffle jus, pommes anna and glazed shallot.",image:"https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",featured:true},
  {id:"m2",name:"Ember-Roasted Sea Bass",category:"Mains",price:28000,description:"Wild sea bass, saffron velouté, fennel and preserved lemon.",image:"https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop",featured:true},
  {id:"m3",name:"Herb-Crusted Lamb",category:"Mains",price:31000,description:"Slow-roasted lamb, rosemary reduction, young vegetables.",image:"https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"},
  {id:"m4",name:"Wild Mushroom Risotto",category:"Mains",price:18000,description:"Porcini, parmesan, thyme and 24-month aged balsamic.",image:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=1200&auto=format&fit=crop"},
  {id:"m5",name:"Poulet Yassa Maison",category:"Mains",price:22000,description:"Charred chicken, caramelized onion, mustard and citrus jus.",image:"https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=1200&auto=format&fit=crop",spicy:true},
  {id:"m6",name:"Poisson Braisé Signature",category:"Mains",price:24000,description:"Whole market fish, smoked pepper relish, herbs and roasted plantain.",image:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop"},
  {id:"d1",name:"Dark Chocolate Sphere",category:"Desserts",price:11000,description:"70% chocolate, salted caramel, cacao nib and vanilla cream.",image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200&auto=format&fit=crop"},
  {id:"d2",name:"Vanilla Crème Brûlée",category:"Desserts",price:9000,description:"Madagascar vanilla custard, caramel glass and berries.",image:"https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?q=80&w=1200&auto=format&fit=crop"},
  {id:"d3",name:"Citrus Olive Oil Cake",category:"Desserts",price:8500,description:"Citrus curd, mascarpone cloud and pistachio.",image:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200&auto=format&fit=crop"},
  {id:"w1",name:"Sommelier Selection",category:"Wine",price:15000,description:"Curated pairing by the glass across the tasting menu.",image:"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop"},
];

export const mockOrders: Order[] = [
  {id:"RK-1042",customerName:"Aïcha Mensah",phone:"+229 97 22 10 45",address:"Cadjèhoun, Cotonou",items:[{dishId:"m1",quantity:1},{dishId:"d2",quantity:2}],status:"out_for_delivery",paymentMethod:"FedaPay",createdAt:"2026-09-24T14:25:00Z",deliveryFee:1500},
  {id:"RK-1041",customerName:"Koffi Dossou",phone:"+229 66 41 12 90",address:"Fidjrossè, Cotonou",items:[{dishId:"m6",quantity:1},{dishId:"s2",quantity:1}],status:"preparing",paymentMethod:"FedaPay",createdAt:"2026-09-24T14:05:00Z",deliveryFee:1500},
  {id:"RK-1040",customerName:"Mariam Houngbo",phone:"+229 61 22 64 77",address:"Agla, Cotonou",items:[{dishId:"m5",quantity:2}],status:"confirmed",paymentMethod:"Pay at table",createdAt:"2026-09-24T13:42:00Z",deliveryFee:0},
];

export const customers: Customer[] = [
  {id:"C-001",name:"Aïcha Mensah",email:"aicha@example.com",phone:"+229 97 22 10 45",orders:14,spend:382000,lastOrder:"Today",segment:"VIP"},
  {id:"C-002",name:"Koffi Dossou",email:"koffi@example.com",phone:"+229 66 41 12 90",orders:7,spend:188500,lastOrder:"Today",segment:"Returning"},
  {id:"C-003",name:"Mariam Houngbo",email:"mariam@example.com",phone:"+229 61 22 64 77",orders:1,spend:45500,lastOrder:"Today",segment:"New"},
  {id:"C-004",name:"Jean Ahouansou",email:"jean@example.com",phone:"+229 65 91 43 10",orders:9,spend:244000,lastOrder:"2 days ago",segment:"Returning"},
];

export const drivers: Driver[] = [
  {id:"D-01",name:"Armand S.",phone:"+229 90 44 18 20",status:"Delivering",zone:"Fidjrossè",rating:4.9,deliveries:183,lat:6.369, lng:2.392},
  {id:"D-02",name:"Moussa K.",phone:"+229 96 12 48 08",status:"Available",zone:"Cadjèhoun",rating:4.8,deliveries:141,lat:6.355, lng:2.384},
  {id:"D-03",name:"Ruth A.",phone:"+229 97 71 23 55",status:"Available",zone:"Haie Vive",rating:4.9,deliveries:212,lat:6.352, lng:2.393},
];

export const revenueSeries = [
  {day:"Mon",revenue:182000,orders:12},{day:"Tue",revenue:214000,orders:15},{day:"Wed",revenue:198000,orders:14},{day:"Thu",revenue:265000,orders:18},{day:"Fri",revenue:312000,orders:22},{day:"Sat",revenue:356000,orders:27},{day:"Sun",revenue:291000,orders:21}
];

export const formatCFA = (amount:number) => new Intl.NumberFormat("fr-FR").format(amount) + " CFA";
