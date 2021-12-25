import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Order } from '../model/order';
import {Produit} from "../model/Produit";


@Injectable({
  providedIn: 'root'
})
export class CommandesServiceService {
  getOrdersList():Observable<Order[]>
  {
    return this.http.get<Order[]>("http://localhost:8080/Orders/displayorders");
  }

  getnBOrdersByDay():Observable<Object[]>
  {

    return this.http
    .get<Object[]>("http://localhost:8080/Orders/count1")

  }
  getnbOrdersByStatus():Observable<Map<String,Object[]>>
  {
    return this.http
    .get<Map<String,Object[]>>("http://localhost:8080/Orders/count2")
  }
  getnbCompletedOrdersByDay():Observable<Object[]>
  {
    return this.http
    .get<any>("http://localhost:8080/Orders/count4")

  }
  getnbOrdersByMonth()
  {
    return this.http
    .get<Map<String,Object[]>>("http://localhost:8080/Orders/count5")
  }
   getNbOrdersByCustomer():Observable<Object[]>
   {
    return this.http
    .get<Object[]>("http://localhost:8080/Orders/count6")
   }
   getNbOrdersByCountry():Observable<Object[]>
   {
    return this.http
    .get<Object[]>("http://localhost:8080/Orders/count8")
   }
   getOrder(i:number):Observable<Order>
   {
    return this.http
    .get<Order>("http://localhost:8080/Orders/select/"+i);
   }
   getlastOrder():Observable<Object[]>
   {
    return this.http
    .get<Object[]>("http://localhost:8080/Orders/getorder");
   }
  addOrder(o:Order) {

    return this.http.post<Order[]>("http://localhost:8080/Orders/addOrder",o)
  }
  deleteOrder(i:number): Observable<any> {

    return this.http.get<number>("http://localhost:8080/Orders/deleteOrder/"+i)
  }
  updateOrder(o:Order,i:number): Observable<any>
  {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(o);
    console.log(body)
    return this.http.post<Order>
    ("http://localhost:8080/Orders/updateorder/"+i,o);
  }

mailing(cust_id:Number)
{
  return this.http.get<Number>("http://localhost:8080/Orders/sendmail/"+cust_id)
}

orderproducts(prod_id:number,o:Order)
{

    return this.http.post<any>("http://localhost:8080/Orders/updateorder3/"+prod_id+"/"+o.order_id,o);
}
assigncustomer(cust_id:number,o:Order)
{
  return this.http.post<any>("http://localhost:8080/Orders/updateorder2/"+cust_id+"/"+o.order_id,o);
}
viewProductList()
  {
return this.http.get<Produit[]>("http://localhost:8080/produit/getAllProduits")
  }

  constructor(private http:HttpClient) { }
}
