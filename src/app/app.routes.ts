import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'customers',
    component: CustomersComponent,
    title: 'Customer Page',
  },
  {
    path: 'invoices',
    component: InvoicesComponent,
    title: 'Invoice Page',
  },
  {
    path: 'user',
    component: UserComponent,
    title: 'User Page',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login Page',
  },
];
