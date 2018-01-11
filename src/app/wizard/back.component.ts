import { Component } from '@angular/core';

import ButtonComponent from './button.component';

import WizardService from './wizard.service';

@Component({
  selector: 'back',
  template: `<ng-content></ng-content>`,
})
export default class BackComponent extends ButtonComponent {

  constructor(private wizardService: WizardService) { super(); }

  protected action(): void {
    this.wizardService.back();
  }
}
