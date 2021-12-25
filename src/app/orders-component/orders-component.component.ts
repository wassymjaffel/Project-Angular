import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from '../model/order';
import { CommandesServiceService } from '../service/commandes-service.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-orders-component',
  templateUrl: './orders-component.component.html',
  styleUrls: ['./orders-component.component.css']
})
export class OrdersComponentComponent implements OnInit {
  @ViewChild('paginator')paginator!: MatPaginator;
  list:Order[]=[]
  page = 1;
  count = 0;
  pageSize = 7;
  pageSizes = [3, 6, 9];
  handlePageChange(event: number): void {
    this.page = event;
    this.getOrders();
  }
  o:Order=new Order
  getOrders()     {
    this.service.getOrdersList().subscribe(
      (data:Order[])=>{this.list = data});
    console.log(this.list)
    return this.list;
  }
  saveOrders(o:Order)
  {
    this.service.addOrder(o).subscribe(
      res => {console.log(res);});
  }
  deleteOrder(i:number){
    this.service.deleteOrder(i)
      .subscribe(response => {
        this.list = this.list.filter(item => item.order_id !== i);
      });
  }
  Email(i:Number)
  {
    this.service.mailing(i).subscribe();
  }


  constructor(private service:CommandesServiceService) { }





  ngAfterViewInit() {

  }

  ngOnInit(): void {



    this.getOrders()


  }
  getOrder(i:number)
  {
    this.service.getOrder(i).subscribe(
      (data:Order)=>{this.o = data});
    return this.o
  }
  updateOrder(o:Order,i:number)
  {
    this.service.updateOrder(o,i).subscribe(
      res => {console.log(res);});

  }



}
