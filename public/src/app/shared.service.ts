import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private subject = new Subject<any>();
 
    sendClickEvent(a: any) {
        this.subject.next(a);
    }
    getClickEvent(): Observable<any> {
        return this.subject.asObservable();
    }
    constructor() { }

  }