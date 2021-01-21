import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ConsoleLogger } from '../logger/logger';
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
  providers: [
    {
      provide: "logger",
      useClass: ConsoleLogger
    }],
  bootstrap: [MainComponent]
})
export class MainModule { }
