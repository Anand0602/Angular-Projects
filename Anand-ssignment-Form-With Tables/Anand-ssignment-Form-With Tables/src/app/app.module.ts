import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressformComponent } from './addressform/addressform.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { NewformComponent } from './newform/newform.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressformComponent,
    TestComponent,
    NewformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
