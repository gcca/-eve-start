import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/map';

import ViewerContainerDirective from './viewer.container.directive';

import Step from './step';
import WizardService from './wizard.service';
import WizardView from './wizard-view';

@Component({
  selector: 'viewer',
  template: `<ng-template viewer-container></ng-template>`,
})
export default class ViewerComponent implements OnDestroy, OnInit {

  @ViewChild(ViewerContainerDirective)
  viewerContainer: ViewerContainerDirective;

  private changeSubscription: Subscription;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private wizardService: WizardService,
  ) { }

  public ngOnDestroy(): void {
    if (this.changeSubscription) {
      this.changeSubscription.unsubscribe();
    }
  }

  public ngOnInit(): void {
    this.changeSubscription = this.wizardService
      .change$
      .map<Step, WizardView>(step => step.component)
      .map<WizardView, ComponentFactory<WizardView>>(component =>
        this.componentFactoryResolver.resolveComponentFactory(component))
      .subscribe(componentFactory => {
        let viewContainerRef = this.viewerContainer.viewContainerRef;
        viewContainerRef.clear();
        viewContainerRef.createComponent(componentFactory);
      });
  }
}
