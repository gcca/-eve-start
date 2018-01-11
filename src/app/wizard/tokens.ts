import { InjectionToken } from '@angular/core';

import Step from './step';
import StepsModule from './steps-module';

const kSteps = 'Wizard Steps';
const kStepsModule = 'Wizard Steps Module';
const kStepSupport = 'Wizard Step Support';

export const WIZARD_STEPS =
  new InjectionToken<Step[]>(kSteps);

export const WIZARD_STEPS_MODULE =
  new InjectionToken<StepsModule>(kStepsModule);

export const WIZARD_STEP_SUPPORT =
  new InjectionToken<Step>(kStepSupport);
