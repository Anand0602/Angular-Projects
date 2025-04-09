import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressformComponent } from './addressform/addressform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { NewformComponent } from './newform/newform.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressformComponent,
    TestComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule,
    NewformComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
