import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './404notfound/page-not-found.component';
import { AboutListComponent } from './about/about-list/about-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisteredComponent } from './user/registered/registered.component';
import { HomeComponent } from './home/home/home.component';
import { CartListComponent } from './shopping-cart/cart-list/cart-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'manager', loadChildren: './manager/manager.module#ManagerModule' },
    { path: 'product', loadChildren: './product/product.module#ProductModule'},
    { path: 'shoppingCart', component: CartListComponent },
    { path: 'about', component: AboutListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registered', component: RegisteredComponent },
    { path: '**', component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
