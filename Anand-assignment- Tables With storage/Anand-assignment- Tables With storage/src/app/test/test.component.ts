import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: false,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  // e1:EventEmitter<data<any>> | undefined
  ename:any ="abc";
  eaddress:any;
  inputValue:any;
  checkButton:boolean=true;
  f1(value:any){
    this.inputValue=value;
   
  }
  f2(value:any){
    debugger
    console.log(value)
  }
}
