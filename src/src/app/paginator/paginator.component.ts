import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone:false,
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnChanges {
  @Input() totalRecords: number = 0;
  @Input() recordsPerPage: number = 10;
  @Output() pageChanged = new EventEmitter<number>();

  pages: number[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  ngOnChanges() {
    this.totalPages = Math.ceil(this.totalRecords / this.recordsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChanged.emit(this.currentPage);
    }
  }
}
