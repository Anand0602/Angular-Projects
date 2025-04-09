import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone:false,
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() data: any[] = []; // All data
  @Input() currentPage: number = 1; // Current page number
  @Input() itemsPerPage: number = 10;
  @Input() searchTerm: string = ''; // Items per page

  // Get the data for the current page
  getPaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.data.slice(startIndex, endIndex);
  }
}