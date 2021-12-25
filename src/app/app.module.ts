import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './back-office/side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import {CommonModule} from "@angular/common";
import { FooterComponent } from './back-office/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FrontLayoutComponent } from './front-office/front-layout/front-layout.component';
import { AdminDashLayoutComponent } from './back-office/admin-dash-layout/admin-dash-layout.component';
import { FrontHeaderComponent } from './front-office/front-header/front-header.component';
import { FrontFooterComponent } from './front-office/front-footer/front-footer.component';
import {NavBarHeaderComponent} from "./back-office/nav-bar/nav-bar-header.component";
import { GestionClientComponent } from './back-office/GestionClients/gestion-client/gestion-client.component';
import { StatsClientComponent } from './back-office/GestionClients/stats-client/stats-client.component';
import {BasicAuthInterceptor} from "../_helpers/basic-auth.interceptor";
import {ErrorInterceptor} from "../_helpers/error-interceptor";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {EditRayonComponent} from "./back-office/gestionrayon/edit-rayon/edit-rayon.component";
import {RayonInterfaceComponent} from "./back-office/gestionrayon/rayon-interface/rayon-interface.component";
import {ProductfromrayonComponent} from "./back-office/gestionrayon/productfromrayon/productfromrayon.component";
import {DetailRayonComponent} from "./back-office/gestionrayon/detail-rayon/detail-rayon.component";
import {Ng2OrderModule} from "ng2-order-pipe";
import {NgxPaginationModule} from "ngx-pagination";
import {NgxSpinnerModule} from "ngx-spinner";
import { OrdersComponentComponent } from './orders-component/orders-component.component';
import { OrdersStatisticsComponent } from './orders-statistics/orders-statistics.component';
import { OrderAddComponent } from './front-office/order-add/order-add.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarHeaderComponent,
    SideBarComponent,
    FooterComponent,
    LoginComponent,
    FrontLayoutComponent,
    AdminDashLayoutComponent,
    FrontHeaderComponent,
    FrontFooterComponent,
    GestionClientComponent,
    StatsClientComponent,
    EditRayonComponent,
    RayonInterfaceComponent,
    ProductfromrayonComponent,
    DetailRayonComponent,
    OrdersComponentComponent,
    OrdersStatisticsComponent,
    OrderAddComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleChartsModule,
    CommonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  exports: [
    NavBarHeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
