import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageCustomerComponent } from './main-page-customer/main-page-customer.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageCustomerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
