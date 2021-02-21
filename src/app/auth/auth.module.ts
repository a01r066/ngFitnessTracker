import {NgModule} from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [
    AuthRoutingModule
  ]
})
export class AuthModule {
}
