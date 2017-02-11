
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from 'app/core/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    NavComponent
  ],
  exports: [
    HomeComponent,
    NavComponent
  ],
  providers: [
    AuthService // Commenting out this line allows home & nav components to be recognised correctly.
  ]
})
export class CoreModule {

}
