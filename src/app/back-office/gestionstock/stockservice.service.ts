import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Stock} from "../../model/Stock";
import {Produit} from "../../model/Produit";


@Injectable({
  providedIn: 'root'
})
export class StockserviceService {
  constructor(private http:HttpClient) { }

  getStocksList():Observable<Stock[]>
  {
    return this.http.get<Stock[]>("http://localhost:8080/stock/get-all-stocks/");
  }

   getStock(i:number):Observable<Stock>
   {
    return this.http
    .get<Stock>("http://localhost:8080/stock/select/"+i);
   }

  addStock(s:Stock): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(s);
    console.log(body)
    return this.http.post<Stock>("http://localhost:8080/stock/add-stock/",s)
  }
  deleteStock(i:number): Observable<any> {

    return this.http.get<number>("http://localhost:8080/stock/remove-stock/"+i)
  }
  updateStock(s:Stock): Observable<any>
  {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(s);
    console.log(body)
    return this.http.post<Stock>
    ("http://localhost:8080/stock/modify-stock/",s);
  }
  getStatusStocklist():Observable<Stock[]>
  {
    return this.http.get<Stock[]>("http://localhost:8080/stock/retrieveStatusStock/")
  }

  getProductById(id:number): Observable<any>{
    return this.http.get<number>(" http://localhost:8080/stock/produitsStock/"+id)
  }





getProduitWithoutStock():Observable<Produit[]>
{
  return this.http.get<Produit[]>("http://localhost:8080/stock/ProduitWithoutstock/");
}
addstockwithproduit(s:Stock):Observable<any>{

  const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(s);
    console.log(body)
    return this.http.post<Stock>
    ("http://localhost:8080/stock/update-stock-Withproduit/",s);
}
}



