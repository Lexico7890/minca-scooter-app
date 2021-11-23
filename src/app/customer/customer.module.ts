import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { MainPageCustomerComponent } from './main-page-customer/main-page-customer.component';
import { ListUsersComponent } from './list-users/list-users.component';
import {GenericModule} from '../generic/generic.module';
import { TableComponent } from '../generic/table/table.component';


@NgModule({
  declarations: [
    MainPageCustomerComponent,
    ListUsersComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    GenericModule
  ]
})
export class CustomerModule { }
