import { Inject, Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';

import Boundaries from './model/boundaries';
import BoundedNodes from './model/bounded-nodes';
import Traversal from './model/traversal';

import Step, { STEP_VALUE } from './step';

import { WIZARD_STEPS } from './tokens';

@Injectable()
export default class WizardService {

  public change$: Observable<Step>;
  public back$: Observable<Step>;
  public next$: Observable<Step>;
  public steps$: Observable<Step>;

  private nodes: BoundedNodes<Step>;
  private traversal: Traversal<Step, Boundaries<Step>>;

  private changeSource: BehaviorSubject<Step>;
  private backSource: Subject<Step>;
  private nextSource: Subject<Step>;
  private stepsSource: ReplaySubject<Step>;

  constructor(@Inject(WIZARD_STEPS) private steps: Step[] = []) {
    this.changeSource = new BehaviorSubject<Step>(WizardService.seed(steps));
    this.backSource = new Subject<Step>();
    this.nextSource = new Subject<Step>();
    this.stepsSource = new ReplaySubject<Step>();

    this.change$ = this.changeSource.asObservable();
    this.back$ = this.backSource.asObservable();
    this.next$ = this.nextSource.asObservable();
    this.steps$ = this.stepsSource.asObservable();

    this.clear();
    this.steps.forEach(step => this.register(step));
  }

  public back(): void {
    this.traversal.back();
    this.backSource.next(this.current);
    this.changeSource.next(this.current);
  }

  public clear(): void {
    this.nodes = new BoundedNodes<Step>();
    this.traversal = this.nodes.traversal();
  }

  public get current(): Step {
    return this.traversal.current;
  }

  public next(): void {
    this.traversal.next();
    this.nextSource.next(this.current);
    this.changeSource.next(this.current);
  }

  public register(step: Step): void {
    this.nodes.push(step);
    this.stepsSource.next(step);
  }

  private static seed([step]: Step[]): Step {
    return step || STEP_VALUE;
  }
}
