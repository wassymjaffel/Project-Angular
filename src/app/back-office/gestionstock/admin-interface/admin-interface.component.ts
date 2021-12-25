import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectorMatcher, ThrowStmt } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { ChartType } from 'angular-google-charts';
import { StockserviceService } from '../stockservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Stock} from "../../../model/Stock";


@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.css']
})
export class AdminInterfaceComponent implements OnInit {
  @Input() s:Stock=new Stock
  stock = new Stock();
  form= new FormGroup({
    libelleStock : new FormControl('',Validators.required),


  });
  f=this.fb.group({
    libelleStock:["",[Validators.required]],


  });


p:number=1;




  constructor(private service:StockserviceService, private route: ActivatedRoute, private fb:FormBuilder,private snackbar:MatSnackBar ) { }


  ngOnInit(): void {


     this.getStocks()


}


  list:Stock[]=[]
  getStocks()     {
    this.service.getStocksList().subscribe(
    (data:Stock[])=>{this.list = data});

    return this.list;

  }
  saveStocks(s:Stock)
  {

    this.service.addStock(s).subscribe(
      res => {console.log(res);});
      this.snackbar.open(' ajout avec succees', '', {
        duration: 2000
      });
  }






    deleteStock(i:number){

      this.service.deleteStock(i)
          .subscribe(response => {
            this.list = this.list.filter(item => item.idStock !== i);
          });
          this.snackbar.open(' delete successfully', '', {
            duration: 2000
          });
        }
        getstock(i:number){
          this.service.getStock
        }


public Searchstock(key: any): void {
  console.log(key);
  const results: any[] = [];
  for (const s of this.list) {
    if (s.libelleStock.toLowerCase().indexOf(key.toLowerCase()) !== -1
    ) {
      results.push(s);
    }
  }
  this.list = results;
  if ( !key) {
    this.getStocks();
  }

}
key:any
reverse : boolean=true;
sort(key:any){
this.key=key
this.reverse=!this.reverse

}
tri(){
let p =document.getElementById('mySelect')
console.log

}
getlibelleStock(){
  return this.form.get('libelleStock');
}





}







