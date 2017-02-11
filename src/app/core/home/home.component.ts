import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public authenticated$: Observable<boolean>;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authenticated$ = this.authService.isAuthenticated$;
  }

  login() {
  }

}
