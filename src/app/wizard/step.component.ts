import { Component, Input } from '@angular/core';

import Step from './step';
import WizardView from './wizard-view';

@Component({
  selector: 'step',
  template: ``,
})
export default class StepComponent implements Step {
  @Input() component: WizardView;
  @Input() label: string;
  @Input() title: string;

  get step(): Step {
    return {
      component: this.component,
      label: this.label,
      title: this.title,
    };
  }
}
