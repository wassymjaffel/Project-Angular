import { Client } from "./Client";

export class Order {
    order_id!:number ;
    order_date!:Date;
    order_address!:String;
    order_status!:boolean;
    customer!:Client;
}
