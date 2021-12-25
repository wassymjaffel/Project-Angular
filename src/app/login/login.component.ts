import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from "../service/ClientService.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";
import {first} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string="";
  password: string ="";
  invalidLogin = false;


  constructor(
    private service:ClientServiceService,
    private router:Router, private route: ActivatedRoute,
    private authenticationService: AuthenticationService) {

    // redirect to home if already logged in
    if ((this.authenticationService.currentUserValue)&&!(this.username.startsWith("_"))) {
      this.router.navigate(['/']).then(r => this.router.navigate(['/front-route']));}
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if(this.username.startsWith("_")) {
      this.authenticationService.login(this.username, this.password)
        .pipe(first()).subscribe(data => {
        this.router.navigate(['/']).then(r => this.router.navigate(['/back-route']))
      });
    } else {
      this.authenticationService.login(this.username, this.password)
        .pipe(first()).subscribe(data => {
        this.router.navigate(['/']).then(r => this.router.navigate(['/front-route']))
      });
    }

  }


}
