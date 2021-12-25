import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RayonserviceService } from '../rayonservice.service';
import {Rayon} from "../../../model/Rayon";

@Component({
  selector: 'app-detail-rayon',
  templateUrl: './detail-rayon.component.html',
  styleUrls: ['./detail-rayon.component.css']
})
export class DetailRayonComponent implements OnInit {
@Input()rayon!:Rayon;
@Output() notif= new EventEmitter<any>();
  constructor(private service:RayonserviceService, private route:ActivatedRoute, private r:Router) { }

  ngOnInit(): void {

    let c = this.route.snapshot.params['idRayon']
    this.service.getRayon(c).subscribe(
      (data)=>this.rayon=data
    )
  }

}
