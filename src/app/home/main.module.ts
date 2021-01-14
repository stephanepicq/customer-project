import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { mainRoute } from '../routing/main-routing';
import { HomeComponent } from './home.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent, HomeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(mainRoute)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
