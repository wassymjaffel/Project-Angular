import { Component } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSpringProject';
  constructor(private spinner:NgxSpinnerService) {
    this.spinner.show(undefined,{
      type:'timer'
      }
      );
    setTimeout(() => {
    this.spinner.hide();
    },2000);
  }
}
