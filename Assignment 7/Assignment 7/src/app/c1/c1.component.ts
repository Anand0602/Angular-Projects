import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-c1',
  standalone: false,
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1Component implements OnChanges {
  @Input() selectedUser: { id: number; name: string; age: number } | null = null; // Receives user for editing
  @Output() formSubmitted = new EventEmitter<{ id: number; name: string; age: number }>();

  id: number | null = null;
  name: string = '';
  age: number | null = null;
  isEditMode: boolean = false;


  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedUser'] && this.selectedUser) {
      this.id = this.selectedUser.id;
      this.name = this.selectedUser.name;
      this.age = this.selectedUser.age;
      this.isEditMode = true; // Set edit mode
    }
  }

  onSubmit() {
    if (this.name && this.age !== null) {
      this.formSubmitted.emit({ id: this.id ?? 0, name: this.name, age: this.age });
      this.resetForm();
    }
  }

  resetForm() {
    this.id = null;
    this.name = '';
    this.age = null;
    this.isEditMode = false;
  }
}
