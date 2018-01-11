import {
  AfterViewInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';

import StepComponent from './step.component';

import WizardService from './wizard.service';

@Component({
  selector: 'steps',
  template: `<ng-content></ng-content>`,
})
export default class StepsComponent implements AfterViewInit {
  @ContentChildren(StepComponent) stepComponents: QueryList<StepComponent>;

  constructor(private wizardService: WizardService) { }

  public ngAfterViewInit(): void {
    this.stepComponents.forEach(stepComponent => {
      this.wizardService.register(stepComponent.step);
    });
  }
}
