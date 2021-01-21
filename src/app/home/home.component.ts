import { Component, Injector } from '@angular/core';
import { ParentLogger } from '../logger/logger';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  logger: ParentLogger;

  constructor(_injector: Injector) {
    this.logger = _injector.get("logger");
    this.logger.log();
  }

}
