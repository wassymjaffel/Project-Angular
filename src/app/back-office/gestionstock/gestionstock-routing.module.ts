import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { DetailStockComponent } from './detail-stock/detail-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { ProductfromstockComponent } from './productfromstock/productfromstock.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

const routes: Routes = [
  {path:'UpdateProduit/:idStock',component:UpdateProduitComponent},
  {path:'detailstock/:idStock',component:DetailStockComponent},
  {path:'produitsfromstock/:idStock',component:ProductfromstockComponent},
  { path: 'stock-component', component: AdminInterfaceComponent },
  {path:'Editpath/:idStock',component:EditStockComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionstockRoutingModule { }
