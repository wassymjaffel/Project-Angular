import { Component, OnInit } from '@angular/core';
import {Client} from "../model/Client";
import {ClientServiceService} from "../service/ClientService.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:ClientServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  saveClient(c:Client)
  {
    this.service.addClient(c).subscribe(
      res => {console.log(res);}
    )
    this.route.navigateByUrl('');
  }

  c:Client=new Client()
}
