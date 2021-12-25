import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StockserviceService } from '../stockservice.service';
import {Stock} from "../../../model/Stock";

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {
 stock!: Stock;



  constructor(private service:StockserviceService,private route:ActivatedRoute, private r:Router,private snackbar:MatSnackBar) { }

  ngOnInit(): void {

    this.stock = new Stock();
   let u =this.route.snapshot.params['idStock'];
      this.service.getStock(u).subscribe(
        (data)=>this.stock=data
      )
  }
  updateStock()
  {

    this.service.updateStock(this.stock).subscribe(
      res => {console.log(res);});
      this.r.navigateByUrl('stock-component');
      this.snackbar.open(' modif avec succees', '', {
        duration: 2000
      });
  }
}



