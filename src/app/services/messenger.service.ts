import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject=new Subject();
  constructor() { }
  sendMsg(product){
 this.subject.next(product); //triggering an event
  }

  getMsg():Observable<any> {
    return  this.subject.asObservable();
  }
}
