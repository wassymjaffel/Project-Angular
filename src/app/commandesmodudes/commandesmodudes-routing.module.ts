import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponentComponent } from '../orders-component/orders-component.component';
import { OrdersStatisticsComponent } from '../orders-statistics/orders-statistics.component';

const routes: Routes = [
  {path: 'orders_mangement', component: OrdersComponentComponent},
  {path:'orders_statistics',component:OrdersStatisticsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandesmodudesRoutingModule { }
