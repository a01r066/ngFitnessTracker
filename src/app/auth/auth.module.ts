import {NgModule} from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {AuthRoutingModule} from './auth-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexModule} from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexModule,
    FormsModule,
    MatDatepickerModule
  ]
})
export class AuthModule {
}
