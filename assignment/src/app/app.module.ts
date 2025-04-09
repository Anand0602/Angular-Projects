import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { TransformEmailPipe } from './transform-email.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TableComponent, PaginatorComponent, TransformEmailPipe],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}