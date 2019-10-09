import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './404notfound/page-not-found.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { AboutListComponent } from './about/about-list/about-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisteredComponent } from './user/registered/registered.component';
import { HomeComponent } from './home/home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCommonModule } from './material-common/material-common.module';
import { CartListComponent } from './shopping-cart/cart-list/cart-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ContactListComponent,
    AboutListComponent,
    LoginComponent,
    RegisteredComponent,
    HomeComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialCommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
