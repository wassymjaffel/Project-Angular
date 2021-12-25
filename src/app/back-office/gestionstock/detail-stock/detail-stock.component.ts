import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


import { StockserviceService } from '../stockservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Stock} from "../../../model/Stock";
@Component({
  selector: 'app-detail-stock',
  templateUrl: './detail-stock.component.html',
  styleUrls: ['./detail-stock.component.css']
})
export class DetailStockComponent implements OnInit {


  @Input() stock!:Stock;
  @Output() notif= new EventEmitter<any>();

  constructor(private service:StockserviceService, private route:ActivatedRoute ,private r:Router) { }

  ngOnInit(): void {


    let u =this.route.snapshot.params['idStock'];
       this.service.getStock(u).subscribe(
         (data)=>this.stock=data

 )
    console.log(this.stock)


   }

  }










