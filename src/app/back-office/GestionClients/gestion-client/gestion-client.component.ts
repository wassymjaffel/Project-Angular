import {Component, Input, OnInit} from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {ClientServiceService} from "../../../service/ClientService.service";
import {Client} from "../../../model/Client";
import {FormControl} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";



@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css']
})
export class GestionClientComponent implements OnInit {

  constructor(private service:ClientServiceService,private route:ActivatedRoute, private  snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.service.getClientsList().subscribe((data)=>{this.list= data})

  this.getClients()
    console.log(this.list)
  }
  list:Client[]=[]

  getClients()     {
    this.service.getClientsList().subscribe(
      (data:Client[])=>{this.list = data});
    console.log(this.list)
    return this.list;
  }
  deleteClient(i:number){
    this.service.deleteClient(i)
      .subscribe(response => {
      this.list = this.list.filter(item => item.idClient !== i);
this.UpdateTable();
    });

  }
  UpdateTable(){
    this.service.getClientsList().subscribe(data => {
      this.list = data;

    });
    this.UpdateTable2();
  }
  UpdateTable2(){
    this.service.getClientsList().subscribe(data => {
      this.list = data;

    });
  }
  saveClient(c:Client)
  {
    this.service.addClient(c).subscribe(
      res => {console.log(res);}
    )
    this.snackbar.open('ajout avec success','',{
      duration: 2000
  })
    this.UpdateTable2();
  }

  UpdateClient(c:Client,IdClientUpdate:number)
  { c.idClient=IdClientUpdate;
    this.service.updateClient(c).subscribe(
      res => {console.log(res);})
  }
 c:Client=new Client()
MakeAdmin(id:number)
{
  this.service.makeAdmin(id).subscribe(res=>{console.log(res)})
}

}
