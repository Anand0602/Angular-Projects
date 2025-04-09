import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,ToastrModule.forRoot({
      positionClass: 'toast-top-right', // Sets the toast at the top-right
      closeButton: true, // Adds a close button to the toast
      timeOut: 3000 // Auto-closes after 3 seconds
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
