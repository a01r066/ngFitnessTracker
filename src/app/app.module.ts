import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {AuthModule} from './auth/auth.module';
import {TrainingModule} from './training/training.module';
import {AppRoutingModule} from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatLineModule} from '@angular/material/core';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { TopbarComponent } from './navigation/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SidenavComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AuthModule,
    TrainingModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatLineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
