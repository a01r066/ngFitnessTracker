import {NgModule} from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {AuthRoutingModule} from './auth-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexModule} from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FlexModule,
    FormsModule,
    MaterialModule,
  ]
})
export class AuthModule {
}
