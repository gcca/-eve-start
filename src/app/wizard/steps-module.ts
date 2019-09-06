import { Injector, InjectionToken } from '@angular/core';

import Step from './step';

export default interface StepsModule {
  config?: (
    wizardInstance: Wizard,
    injector: Injector,
    module: StepsModule,
  ) => void;
  steps: Step[];
  token?: InjectionToken<StepsModule>;
}

interface Wizard { }
