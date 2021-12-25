import { Component, OnInit } from '@angular/core';
import {Produit} from "../../model/Produit";
import {Order} from "../../model/order";
import {Client} from "../../model/Client";
import {Address} from "../../model/address";
import {CommandesServiceService} from "../../service/commandes-service.service";
@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {
  a:Address=new Address
  o:Order=new Order
  c:Client=new Client
  constructor(private service:CommandesServiceService) { }
  list:Produit[]=[]
  viewProducts()
  {
    this.service.viewProductList().subscribe(
      (data:Produit[])=>{this.list = data});
    console.log(this.list)
  }

  k:any=[]

  v:any=[]
  address!:string;
  setAddress(o:Object[])
  {
    let arr:any = [];
    Object.keys(o).map(function(key:any){
      arr.push({[key]:o[key]})
      return arr;
    });
    this.address=this.a.street+","+this.a.city+","+this.a.region+","+this.a.country;
    this.o.order_address=this.address;
    this.o.order_status=false;
    /*this.c.idClient=3
    this.c.email="ybaissa1957@gmail.com"
    this.c.password="***"
    this.c.profession="job3"
    this.c.categorieClient="c3"
    this.c.nom="e"
    this.c.prenom="d"
    this.c.dateNaissance="1999-12-08"
    this.o.customer=this.c*/
    console.log(this.a.street+","+this.a.city+","+this.a.region+","+this.a.country)
    console.log("address=",this.address)
    console.log(this.o)
    this.service.addOrder(this.o).subscribe(
      r=>{console.log(o);}
    );
  }
  getOrder(i:number)
  {
    this.service.getOrder(i).subscribe(
      (data:Order)=>{this.o = data});
    return this.o
  }
  listorders:Order[]=[]
  addtocart(n:number)
  {



    this.service.getlastOrder().subscribe((data:Object[])=>{
      this.o.order_id=Number(data[0])
      this.getOrder(Number(data[0]))
      console.log(data[0])})

    console.log(this.getOrder(this.o.order_id))
    this.o=this.getOrder(this.o.order_id);
    this.service.assigncustomer(84,this.o).subscribe()
    this.service.orderproducts(n,this.o).subscribe(
      res => {console.log(this.o,n);});

  }



  ngOnInit(): void {
    this.viewProducts()
  }


}
