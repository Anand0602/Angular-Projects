import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  data: any[] = []; // All data
  currentPage = 1; // Current page number
  itemsPerPage = 10; // Items per page
  searchTerm: string = ''; // Search term

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch data from the JSON file
    this.http.get<any[]>('data.json').subscribe((data) => {
      this.data = data;
    });
  }

  // Handle page change event from the paginator
  onPageChange(page: number) {
    this.currentPage = page;
  }
}