import {
  FactoryProvider,
  Provider,
  StaticProvider,
  ValueProvider,
} from '@angular/core';

import { WIZARD_STEPS } from './tokens';

import Step from './step';
import WizardService from './wizard.service';

export const _WIZARD_SERVICE_NG_PROVIDERS: FactoryProvider[] = [
  {
    deps: [
      WIZARD_STEPS,
    ],
    provide: WizardService,
    useFactory: (steps: Step[]) => new WizardService(steps),
  }
];

export function makeServiceProviders(steps: Step[]): Provider[] {
  const kStepsProvider: ValueProvider = {
    provide: WIZARD_STEPS,
    useValue: steps,
  };

  const staticProviders: StaticProvider = [
    kStepsProvider,
  ];

  return staticProviders;
}
