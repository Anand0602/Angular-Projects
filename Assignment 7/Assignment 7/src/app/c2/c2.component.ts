import {Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-c2',
  standalone: false,
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.css'
})
export class C2Component {
  @Input() tableData: { id: number; name: string; age: number }[] = [];
  @Output() editUser = new EventEmitter<{ id: number; name: string; age: number }>(); // Emits edit event

  onEdit(user: { id: number; name: string; age: number }) {
    this.editUser.emit(user); // Send selected user to parent
  }
}
