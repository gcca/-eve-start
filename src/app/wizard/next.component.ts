import { Component } from '@angular/core';

import ButtonComponent from './button.component';

import WizardService from './wizard.service';

@Component({
  selector: 'next',
  template: `<ng-content></ng-content>`,
})
export default class NextComponent extends ButtonComponent {

  constructor(private wizardService: WizardService) { super(); }

  protected action(): void {
    this.wizardService.next();
  }
}
