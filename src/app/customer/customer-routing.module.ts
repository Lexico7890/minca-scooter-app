import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { MainPageCustomerComponent } from './main-page-customer/main-page-customer.component';

const routes: Routes = [
  {
    path: '',
    component: ListUsersComponent,
  },
  {
    path: 'customer-list',
    component: ListUsersComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
