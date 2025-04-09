import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone:false,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  records: { id: number; name: string; email: string; city: string; }[] = [
    { "id": 1, "name": "Ryan Moore", "email": "ryan.moore@example.com", "city": "Miami" },
    { "id": 2, "name": "Emma White", "email": "emma.white@example.com", "city": "Atlanta" },
    { "id": 3, "name": "Liam Evans", "email": "liam.evans@example.com", "city": "Minneapolis" },
    { "id": 4, "name": "Sophia Bennett", "email": "sophia.bennett@example.com", "city": "Kansas City" },
    { "id": 5, "name": "Jackson Reed", "email": "jackson.reed@example.com", "city": "Raleigh" },
    { "id": 6, "name": "Olivia Cooper", "email": "olivia.cooper@example.com", "city": "Milwaukee" },
    { "id": 7, "name": "Aiden Murphy", "email": "aiden.murphy@example.com", "city": "Tampa" },
    { "id": 8, "name": "Chloe Ross", "email": "chloe.ross@example.com", "city": "New Orleans" },
    { "id": 9, "name": "Benjamin Scott", "email": "benjamin.scott@example.com", "city": "Cleveland" },
    { "id": 10, "name": "Ella Phillips", "email": "ella.phillips@example.com", "city": "Salt Lake City" },
    { "id": 11, "name": "Mason Brooks", "email": "mason.brooks@example.com", "city": "Richmond" },
    { "id": 12, "name": "Zoe Foster", "email": "zoe.foster@example.com", "city": "Hartford" },
    { "id": 13, "name": "Daniel Rivera", "email": "daniel.rivera@example.com", "city": "Boise" },
    { "id": 14, "name": "Avery James", "email": "avery.james@example.com", "city": "Des Moines" },
    { "id": 15, "name": "Ethan Torres", "email": "ethan.torres@example.com", "city": "Little Rock" },
    { "id": 16, "name": "Lily Ward", "email": "lily.ward@example.com", "city": "Buffalo" },
    { "id": 17, "name": "Carter Hughes", "email": "carter.hughes@example.com", "city": "Birmingham" },
    { "id": 18, "name": "Mila Patterson", "email": "mila.patterson@example.com", "city": "Providence" },
    { "id": 19, "name": "Noah Gray", "email": "noah.gray@example.com", "city": "Anchorage" },
    { "id": 20, "name": "Charlotte Bryant", "email": "charlotte.bryant@example.com", "city": "Honolulu" },
    { "id": 21, "name": "Lucas Perry", "email": "lucas.perry@example.com", "city": "Spokane" },
    { "id": 22, "name": "Scarlett Gomez", "email": "scarlett.gomez@example.com", "city": "Madison" },
    { "id": 23, "name": "Julian Sanders", "email": "julian.sanders@example.com", "city": "Wichita" },
    { "id": 24, "name": "Eleanor Butler", "email": "eleanor.butler@example.com", "city": "Tulsa" },
    { "id": 25, "name": "Matthew Jenkins", "email": "matthew.jenkins@example.com", "city": "Baton Rouge" },
    { "id": 26, "name": "Aubrey Ramirez", "email": "aubrey.ramirez@example.com", "city": "Reno" },
    { "id": 27, "name": "Wyatt Coleman", "email": "wyatt.coleman@example.com", "city": "Chesapeake" },
    { "id": 28, "name": "Penelope Simmons", "email": "penelope.simmons@example.com", "city": "Scottsdale" },
    { "id": 29, "name": "Levi Flores", "email": "levi.flores@example.com", "city": "Aurora" },
    { "id": 30, "name": "Madeline Russell", "email": "madeline.russell@example.com", "city": "Lexington" }
]


  paginatedRecords: { id: number; name: string; email: string; city: string; }[] = [];
  recordsPerPage = 10;

  ngOnInit() {
    this.onPageChange(1);
  }

  onPageChange(page: number) {
    const startIndex = (page - 1) * this.recordsPerPage;
    const endIndex = startIndex + this.recordsPerPage;
    this.paginatedRecords = this.records.slice(startIndex, endIndex);
  }
}
