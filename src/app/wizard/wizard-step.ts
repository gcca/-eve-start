import { InjectionToken } from '@angular/core';

import WizardView from './wizard-view';

export default function WizardStep(token?: InjectionToken<WizardView>) {
  return function (component: WizardView) {
    if (!token) {
      token = new InjectionToken<WizardView>(component.name);
    }

    if (token) {
      registerWizardComponentStep(token, component);
    }

    return component;
  }
}

function registerWizardComponentStep(
  token: InjectionToken<WizardView>,
  component: WizardView): void {

  tokenToComponent[token.toString()] = component;
}

const tokenToComponent = {} as { [token: string]: WizardView };
