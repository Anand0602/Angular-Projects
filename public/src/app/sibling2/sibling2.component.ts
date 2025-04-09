import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sibling2',
  standalone: false,
  templateUrl: './sibling2.component.html',
  styleUrl: './sibling2.component.css'
})
export class Sibling2Component {
constructor (private serv:SharedService){}
show:any;
ngOnInit(){
  this.serv.getClickEvent().subscribe((data)=>{
    this.show=data;
  })
}
}
