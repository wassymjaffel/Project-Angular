import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';


import { StockserviceService } from '../stockservice.service';
import {Stock} from "../../../model/Stock";

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
produit:any
produitcontainer:any[]=[]
stock!:Stock;
  constructor(private s:StockserviceService,private ac :ActivatedRoute,private snackbar:MatSnackBar,
    private route:Router) { }

  ngOnInit(): void {
    this.s.getProduitWithoutStock().subscribe(
      (data)=>{
        this.produit=data;
        console.log(data)
      }

    )
  let u = this.ac.snapshot.params['idStock']
    this.s.getStock(u).subscribe(
      (data)=>{
        this.stock=data

        console.log(this.stock);
  this.produitcontainer=this.stock.produits


      }

    )
  }

  drop(event: CdkDragDrop<any[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex

    );

    console.log(event);
  }

  save(){

    this.stock.produits=this.produitcontainer;
    this.s.addstockwithproduit(this.stock).subscribe(
      (data)=>
      console.log(data)

    )
    this.snackbar.open(' Produit mis a jours avec succées', '', {
      duration: 2000
    });
    this.route.navigateByUrl('stock-component')

  }
  cancel(){

    this.snackbar.open(' pas de mis a jours', '', {
      duration: 2000
    });
    this.route.navigateByUrl('.back-route/stock-component')
  }
}
