import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Rayon} from "../../model/Rayon";


@Injectable({
  providedIn: 'root'
})
export class RayonserviceService {

  constructor(private http:HttpClient) { }

  getRayonsList():Observable<Rayon[]>
  {
    return this.http.get<Rayon[]>("http://localhost:8080/rayon/get-all-rayons");
  }

   getRayon(i:number):Observable<Rayon>
   {
    return this.http
    .get<Rayon>("http://localhost:8080/rayon/select/"+i);
   }
  addRayon(r:Rayon): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(r);
    console.log(body)
    return this.http.post<Rayon>("http://localhost:8080/rayon/add-rayon",r)
  }
  deleteRayon(i:number): Observable<any> {

    return this.http.get<number>("http://localhost:8080/rayon/remove-rayon/"+i)
  }
  updateRayon(r:Rayon): Observable<any>
  {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(r);
    console.log(body)
    return this.http.post<Rayon>
    ("http://localhost:8080/rayon/modify-rayon",r);
  }

  getProductById(id:number): Observable<any>{
    return this.http.get<number>(" http://localhost:8080/rayon/produitsRayon/"+id)
  }
}




