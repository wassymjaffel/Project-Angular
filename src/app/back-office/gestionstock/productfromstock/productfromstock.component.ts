import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StockserviceService } from '../stockservice.service';
import {Produit} from "../../../model/Produit";

@Component({
  selector: 'app-productfromstock',
  templateUrl: './productfromstock.component.html',
  styleUrls: ['./productfromstock.component.css']
})
export class ProductfromstockComponent implements OnInit {

 productlist!: Produit[];

  constructor(private service:StockserviceService,private route:ActivatedRoute, private r:Router) { }

  ngOnInit(): void {



    let idStock =this.route.snapshot.params['idStock'];
    this.service.getProductById(idStock).subscribe(
      (data:Produit[])=>this.productlist=data
      )



  }

}
