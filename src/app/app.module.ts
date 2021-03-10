import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import {TrainingModule} from './training/training.module';
import {AppRoutingModule} from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { TopbarComponent } from './navigation/topbar/topbar.component';
import {MatLineModule} from '@angular/material/core';
import {MaterialModule} from './material.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';

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
