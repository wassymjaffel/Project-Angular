import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionstockRoutingModule } from './gestionstock-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { DetailStockComponent } from './detail-stock/detail-stock.component';
import { ProductfromstockComponent } from './productfromstock/productfromstock.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';


@NgModule({
  declarations: [
    UpdateProduitComponent,
    DetailStockComponent,
    ProductfromstockComponent,
    AdminInterfaceComponent,
    EditStockComponent,
  ],
  imports: [
    CommonModule,
    GestionstockRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleChartsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    NgxSpinnerModule,

    DragDropModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule


  ]
})
export class GestionstockModule { }
