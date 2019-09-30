import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './404notfound/page-not-found.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { AboutListComponent } from './about/about-list/about-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisteredComponent } from './user/registered/registered.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ContactListComponent,
    AboutListComponent,
    LoginComponent,
    RegisteredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
