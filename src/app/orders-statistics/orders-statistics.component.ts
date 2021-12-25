import { Component, OnInit } from '@angular/core';
import { CommandesServiceService } from '../service/commandes-service.service';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-orders-statistics',
  templateUrl: './orders-statistics.component.html',
  styleUrls: ['./orders-statistics.component.css']
})
export class OrdersStatisticsComponent implements OnInit {

  list2!:Map<String,Object>;
  map:Map<String,Object>=new Map();
  map2:Map<Object,Object>=new Map();
  map3:Map<Object,Object>=new Map();
  ArrayListT:any=[]
  days:any=[]
  array1:any=[]
  values:any=[]
  data1:any=[]
  data3:any=[]
  data5:any[]=[]
  data9:any[]=[]

  getnBOrdersByDay(){
    this.service.getnBOrdersByDay().subscribe
    ((data:Object[])=>{this.ArrayListT = data})

    this.data=this.ArrayListT;


    console.log(this.data)
    return this.data

  }
  ArrayList:Object=[]
  getNbOrdersbyCountry()
  {
    this.service.getNbOrdersByCountry().subscribe
    ((data:Object[])=>{this.ArrayList = data})
    this.data6=this.ArrayList
    console.log(this.ArrayList)
    return this.data6
  }
  getnBOrdersPerMonth()
  {
    this.service.getnbOrdersByMonth().subscribe
    ((data:Map<String,Object>)=>{this.map3 = data})

    this.values = Array.from(this.map3.values());
    for (let i=0;i<this.values.length;i++) {
      this.array1 = Array.from(this.values[i]);
      this.array1.push(this.values[i].month,this.values[i].number_of_orders)
      this.data5.push(this.array1)

      this.data4=this.data5;

      console.log(this.data4)
    }
  }
  list88:Object[]=[]
  getnBOrdersByCustomer()
  {
    this.service.getNbOrdersByCustomer().subscribe
    ((data:Object[])=>{this.list88 = data})
    this.values = Array.from(this.list88.values());
    for (let i=0;i<this.values.length;i++) {
      this.array1 = Array.from(this.values[i]);
      //this.array1.push(this.values[i].customer,this.values[i].number_of_orders)
      this.data3.push(this.array1)

      this.data2=this.data3;
      console.log(this.data3)
    }

  }
  list89:Object[]=[]
  ArrayList3:Object=[]
  getnBcompletedOrdersPerday()
  {
    this.service.getnbCompletedOrdersByDay().subscribe
    ((data:Object[])=>{this.ArrayList3 = data})
    this.data8=this.ArrayList3
    console.log(this.ArrayList3)
  }


  type = ChartType.BarChart
  data:any = this.getnBOrdersByDay()
  columnNames = ['day', 'number_of_orders'];
  options = {
  };
  width = 550;
  height = 400;
  title = 'number of orders per day';
  type1 = ChartType.PieChart
  data2:any = this.getnBOrdersByCustomer()
  columnNames1 = ['customer', 'number_of_orders'];
  options1 = {
  };
  width1 = 550;
  height1 = 400;
  title1 = 'number of orders per customer';
  type2 = ChartType.AreaChart
  data4:any = [
  ];
  columnNames2 = ['month', 'number_of_orders'];
  options2 = {
  };
  width2 = 550;
  height2 = 400;
  title2 = 'number of orders per month';
  /***********************/
  type3 = ChartType.GeoChart
  data6:any = [
    ['China', 1],

    ['US', 3]

  ];
  columnNames3 = ['Country','number_of_orders'];
  options3 = {

    showTip: true

  };
  width3 = 550;
  height3 = 400;
  title3 = 'number of orders per country';
  /****************** */
  type8 = ChartType.Scatter
  data8:any = [


  ];
  columnNames8 = ['Country','number_of_completed_orders'];
  options8 = {

    showTip: true

  };
  width8 = 550;
  height8 = 400;
  title8 = 'number of completed orders by day ';
  constructor(private service:CommandesServiceService) { }



  ngOnInit(): void {
    this.getNbOrdersbyCountry()
    this.getnBOrdersByCustomer()
    this.data=this.getnBOrdersByDay()
    this.getnBOrdersPerMonth()
    this.getnBcompletedOrdersPerday()
  }

}
