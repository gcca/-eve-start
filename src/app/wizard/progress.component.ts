import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import Step from './step';

import WizardService from './wizard.service';

@Component({
  selector: 'progress',
  template: `
  <ul>
    <li *ngFor="let step of steps" [class.active]="step == currentStep()">
      <label>{{ step.label }}</label>
    </li>
  </ul>
  `,
})
export default class ProgressComponent implements OnInit {

  private steps: Step[];

  constructor(
    private ref: ChangeDetectorRef,
    private wizardService: WizardService,
  ) { }

  public ngOnInit(): void {
    this.steps = [];
    this.wizardService.steps$.subscribe(step => this.steps.push(step));
    this.wizardService.change$.subscribe(() => this.ref.detectChanges());
  }

  protected currentStep(): Step {
    return this.wizardService.current;
  }
}
