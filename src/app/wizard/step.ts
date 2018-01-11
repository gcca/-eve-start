import { Component } from '@angular/core';

import WizardView from './wizard-view';

export default interface Step {
  component: WizardView;
  label: string;
  title: string;
}

@Component({
  selector: 'value-step-component',
  template: ``,
})
export class ValueComponent { }

export const STEP_VALUE: Step = {
  component: ValueComponent,
  label: '',
  title: '',
};
