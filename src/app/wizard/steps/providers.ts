import { InjectionToken } from '@angular/core';

import Step from '../step';

export const WIZARD_STEPS = new InjectionToken<Step[]>('Wizard Steps');
