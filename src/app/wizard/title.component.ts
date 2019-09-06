import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/map';

import Step from './step';
import WizardService from './wizard.service';

@Component({
  selector: 'title',
  template: `{{ title }}`,
})
export default class TitleComponent implements OnDestroy, OnInit {

  @Input() private title: string;

  private changeSubscription: Subscription;

  constructor(
    private ref: ChangeDetectorRef,
    private wizardService: WizardService
  ) {
    this.title = '';
  }

  public ngOnDestroy(): void {
    if (this.changeSubscription) {
      this.changeSubscription.unsubscribe();
    }
  }

  public ngOnInit(): void {
    this.changeSubscription =
      this.wizardService
        .change$
        .map<Step, void>(step => this.title = step.title)
        .subscribe(() => this.ref.detectChanges());
  }
}
