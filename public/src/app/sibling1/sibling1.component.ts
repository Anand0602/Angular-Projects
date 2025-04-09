import { Component } from '@angular/core';
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-sibling1',
  standalone: false,
  templateUrl: './sibling1.component.html',
  styleUrl: './sibling1.component.css'
})
export class Sibling1Component {
  constructor(private sub:SharedService){ }
  a1:string="Hello from Sibling1";
  f1(){
    this.sub.sendClickEvent(this.a1);

  }
}
