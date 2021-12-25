import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { RayonserviceService } from '../rayonservice.service';
import {Rayon} from "../../../model/Rayon";

@Component({
  selector: 'app-edit-rayon',
  templateUrl: './edit-rayon.component.html',
  styleUrls: ['./edit-rayon.component.css']
})
export class EditRayonComponent implements OnInit {

  r:Rayon=new Rayon
  rayon:any;
  constructor(private service:RayonserviceService,private route:ActivatedRoute , private j:Router,private snackbar:MatSnackBar) { }

  ngOnInit(): void {

    let u =this.route.snapshot.params['idRayon'];
    console.log(u)
       this.service.getRayon(u).subscribe(
         (data)=>this.rayon=data
       )

  }

  updateRayon(r:Rayon)
  {
    this.service.updateRayon(r).subscribe(
      res => {console.log(res);});
      this.j.navigateByUrl('rayon-component');
      this.snackbar.open(' modif avec succees', 'up', {
        duration: 2000
      });
  }
}
