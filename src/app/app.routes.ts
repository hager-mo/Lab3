import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent  } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path : '',
        component: ProductsComponent,
        title: 'Home component',
    },
    {
        path : 'details/:id',
        component : DetailsComponent,
        title : 'Details' 
    },
    {
        path : "register",
        component : RegisterComponent,
        title : 'Registeration'
    },
    {
        path : "login",
        component : LoginComponent,
        title : 'Log In'
    },
    {
        path: '**', 
        component:PageNotFoundComponent 
    }
];
