import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from "../../../service/ClientService.service";

@Component({
  selector: 'app-stats-client',
  templateUrl: './stats-client.component.html',
  styleUrls: ['./stats-client.component.css']
})
export class StatsClientComponent implements OnInit {

  constructor(private service:ClientServiceService) { }

  ngOnInit(): void {

this.statsCategoryOrdinaire();
this.statsCategoryFidele();
this.statsCategoryPremuim();
  }

  statsCategoryOrdinaire():number
  {
    this.service.clientCategoryStats("ordinaire").subscribe((data:number) =>{this.ordinaire=data});
    return this.ordinaire;
  }
  statsCategoryFidele():number
  {
    this.service.clientCategoryStats("Fidele").subscribe((data:number) =>{this.fidele=data});
    return this.fidele;
  }
  statsCategoryPremuim():number
  {
    this.service.clientCategoryStats("Premuim").subscribe((data:number) =>{this.Premuim=data});
    return this.Premuim;
  }

 ordinaire:number=this.statsCategoryOrdinaire();
fidele:number=this.statsCategoryFidele();
Premuim:number=this.statsCategoryPremuim();
}
