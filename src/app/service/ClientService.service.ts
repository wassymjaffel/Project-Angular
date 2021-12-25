import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Client} from "../model/Client";




@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http:HttpClient) { }


  getClientsList() :Observable<Client[]>{

    return this.http.get<Client[]>("http://localhost:8080/client/clients");
  }

  getClient(i:number):Observable<Client>
  {
    return this.http.get<Client>("http://localhost:8080/client/clientById/"+i);
  }

  addClient(c:Client): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(c);
    console.log(body)
    return this.http.post<Client>("http://localhost:8080/client/addClient/",c)
  }

  deleteClient(i:number): Observable<any> {

    return this.http.get<number>("http://localhost:8080/client/deleteClient/"+i)
  }
  updateClient(c:Client): Observable<any>
  {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(c);
    console.log(body)
    return this.http.post<Client>
    ("http://localhost:8080/client/updateClient/",c);
  }
  clientCategoryStats(categ:string): Observable<any>
  {

    return this.http.get<number>
    ("http://localhost:8080/client/clientsCategoryPourcentage/"+categ);
  }

  clientRole(name:string): Observable<number>
  {

    return this.http.get<number>
    ("http://localhost:8080/client/userRole/"+name);
  }

  makeAdmin(i:number): Observable<any> {
    return this.http.get<number>("http://localhost:8080/client/MakeAdmin/"+i)
  }
}
