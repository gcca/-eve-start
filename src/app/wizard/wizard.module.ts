import { CommonModule } from '@angular/common';
import {
  ANALYZE_FOR_ENTRY_COMPONENTS,
  APP_INITIALIZER,
  ModuleWithProviders,
  NgModule,
  Provider,
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import 'reflect-metadata';

import BackComponent from './back.component';
import NextComponent from './next.component';
import ProgressComponent from './progress.component';
import StepComponent from './step.component';
import StepsComponent from './steps.component';
import TitleComponent from './title.component';
import ViewerComponent from './viewer.component';
import ViewerContainerDirective from './viewer.container.directive';
import WizardComponent from './wizard.component';
import WizardService from './wizard.service';

import { ValueComponent } from './step';

import StepsModule from './steps-module';
import WizardView from './wizard-view';

import {
  WIZARD_STEPS_MODULE,
  WIZARD_STEP_SUPPORT,
} from './tokens';

import {
  _WIZARD_SERVICE_NG_PROVIDERS,
  makeServiceProviders,
} from './providers';

@NgModule({
  declarations: [
    BackComponent,
    NextComponent,
    ProgressComponent,
    StepComponent,
    StepsComponent,
    TitleComponent,
    WizardComponent,
    ValueComponent,
    ViewerComponent,
    ViewerContainerDirective,
  ],
  entryComponents: [
    ValueComponent,
    ViewerComponent,
  ],
  exports: [
    BackComponent,
    NextComponent,
    ProgressComponent,
    StepComponent,
    StepsComponent,
    TitleComponent,
    ViewerComponent,
    WizardComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    ..._WIZARD_SERVICE_NG_PROVIDERS,
  ],
})
export default class WizardModule {

  /**
   * TODO: lazy load refactor
   */
  static forRoot(config: RootModule): ModuleWithProviders {
    return {
      ngModule: WizardModule,
      providers: [
        ..._WIZARD_SERVICE_NG_PROVIDERS,
        ...makeRootProviders(config),
      ],
    };
  }

  static forChild(module: StepsModule = {
    steps: [],
    token: WIZARD_STEPS_MODULE,
  }): ModuleWithProviders {

    return {
      ngModule: WizardModule,
      providers: makeChildProviders(module),
    };
  }
}

export interface RootModule extends StepsModule {
  useHash?: boolean;
  default?: WizardView;
}

function makeRootProviders(config: RootModule): Provider[] {
  notImplemented(config);
  return [];
}

function notImplemented(...args: any[]): never {
  throw new Error('Not implemented ' + args);
}

function makeChildProviders(module: StepsModule): Provider[] {
  return [
    {
      deps: [
        WizardService,
      ],
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: (wizardService: WizardService) => {
        return () => new Promise<Subscription>(
          (resolve:
            (value: Subscription | PromiseLike<Subscription>) => void) =>
          resolve(wizardService.steps$.subscribe(step =>
            Reflect.defineMetadata(WIZARD_STEP_SUPPORT, module.token, step)))
        );
      },
    },
    {
      multi: true,
      provide: ANALYZE_FOR_ENTRY_COMPONENTS,
      useValue: module.steps,
    },
    ...makeServiceProviders(module.steps),
  ];
}
