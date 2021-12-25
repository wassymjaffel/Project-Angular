import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionClientComponent } from './back-office/GestionClients/gestion-client/gestion-client.component';
import {LoginComponent} from "./login/login.component";
import {FrontLayoutComponent} from "./front-office/front-layout/front-layout.component";
import {AdminDashLayoutComponent} from "./back-office/admin-dash-layout/admin-dash-layout.component";
import {StatsClientComponent} from "./back-office/GestionClients/stats-client/stats-client.component";
import {RayonInterfaceComponent} from "./back-office/gestionrayon/rayon-interface/rayon-interface.component";
import {EditRayonComponent} from "./back-office/gestionrayon/edit-rayon/edit-rayon.component";
import {ProductfromrayonComponent} from "./back-office/gestionrayon/productfromrayon/productfromrayon.component";
import {DetailRayonComponent} from "./back-office/gestionrayon/detail-rayon/detail-rayon.component";
import {EditStockComponent} from "./back-office/gestionstock/edit-stock/edit-stock.component";
import {OrderAddComponent} from "./front-office/order-add/order-add.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [

  {path:'',component: LoginComponent },
  {path:'signup',component: SignupComponent },
  {path:'back-route',component:AdminDashLayoutComponent,

  children: [
    {path:'gestion-client', component: GestionClientComponent },
    {path:'stats-Client',component: StatsClientComponent },
    {path:'rayon-component',component:RayonInterfaceComponent,},
    {path:'EditpathRayon/:idRayon',component:EditRayonComponent},

    {path:'produitsfromrayon/:idRayon',component:ProductfromrayonComponent},

    {path:'detailrayon/:idRayon',component:DetailRayonComponent},
    {
      path: 'CommandesModule',
      loadChildren: () =>     import('./commandesmodudes/commandesmodudes.module')
        .then(m => m.CommandesmodudesModule)
    },
    {path:"stockModule",loadChildren:()=>import("./back-office/gestionstock/gestionstock.module").then(mod=>mod.GestionstockModule)} ,
  ],
  },




  {path:'front-route',component:FrontLayoutComponent,
    children: [
      {path:'orderAdd-route',component: OrderAddComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
