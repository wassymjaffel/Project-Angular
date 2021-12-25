import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { RayonserviceService } from '../rayonservice.service';
import {Rayon} from "../../../model/Rayon";

@Component({
  selector: 'app-rayon-interface',
  templateUrl: './rayon-interface.component.html',
  styleUrls: ['./rayon-interface.component.css']
})
export class RayonInterfaceComponent implements OnInit {
  @Input() r:Rayon=new Rayon
  rayon = new Rayon();
  form= new FormGroup({
    libelle : new FormControl('',Validators.required),


  });
  f=this.fb.group({
    libelle:["",[Validators.required]],


  });

  p:number=1;
  constructor(private service:RayonserviceService,private route: ActivatedRoute, private fb:FormBuilder, private snackbar:MatSnackBar) { }


  ngOnInit(): void {



        this.getRayons()





  }



  list:Rayon[]=[]
  getRayons()     {
    this.service.getRayonsList().subscribe(
    (data:Rayon[])=>{this.list = data});

    return this.list;

  }
  saveRayons(r:Rayon)
  {

    this.service.addRayon(r).subscribe(
      res => {console.log(res);});
      this.snackbar.open(' ajout avec succees', 'add', {
        duration: 2000
      });
  }



    deleteRayon(i:number){
      this.service.deleteRayon(i)
          .subscribe(response => {
            this.list = this.list.filter(item => item.idRayon !== i);
          });
          this.snackbar.open(' delete successfully', 'supp', {
            duration: 2000
          });

    }




select(r:Rayon):any
{

  console.log(r)
}


public Searchrayon(key: any): void {
  console.log(key);
  const results: any[] = [];
  for (const r of this.list) {
    if (r.code.toLowerCase().indexOf(key.toLowerCase()) !== -1
    ) {
      results.push(r);
    }
  }
  this.list = results;
  if ( !key) {
    this.getRayons();
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
getlibelle(){
  return this.form.get('libelle')
}
}
