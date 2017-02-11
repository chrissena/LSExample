import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class AuthService {
  public isAuthenticated$: Observable<boolean> = new BehaviorSubject(true).asObservable();

  constructor() {

  }

}
