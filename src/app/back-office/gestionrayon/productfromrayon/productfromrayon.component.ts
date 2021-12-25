import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { RayonserviceService } from '../rayonservice.service';
import {Produit} from "../../../model/Produit";


@Component({
  selector: 'app-productfromrayon',
  templateUrl: './productfromrayon.component.html',
  styleUrls: ['./productfromrayon.component.css']
})
export class ProductfromrayonComponent implements OnInit {
  productlist!: Produit[];
  constructor(private service:RayonserviceService,private route:ActivatedRoute, private r:Router) { }

  ngOnInit(): void {
    let idRayon =this.route.snapshot.params['idRayon'];
   this.service.getProductById(idRayon).subscribe(
    (data:Produit[])=>{this.productlist=data
    }

   )
}
}
