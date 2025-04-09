import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone:false,
  templateUrl: './paginator.component.html',
})
export class PaginatorComponent {
  @Input() totalItems: number = 0; // Total number of items
  @Input() itemsPerPage: number = 10; // Items per page
  @Input() currentPage: number = 1; // Current page number
  @Output() pageChanged = new EventEmitter<number>(); // Event to emit page changes

  // Calculate the total number of pages
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  // Generate an array of page numbers
  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // Handle page change
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChanged.emit(page);
    }
  }
}