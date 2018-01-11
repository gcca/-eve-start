import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, ɵgetDOM as getDOM } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Component, NgModule } from '@angular/core';

import NextComponent from './next.component';
import WizardModule from './wizard.module';

import { NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'test',
  template: `
  <wizard>
    <title></title>
    <progress></progress>
    <viewer></viewer>
    <steps>
      <step
        [component]="OneComponent"
        label="Label One"
        title="Title One"></step>
      <step
        [component]="TwoComponent"
        label="Label Two"
        title="Title Two"></step>
      <step
        [component]="ThreeComponent"
        label="Label Three"
        title="Title Three"></step>
    </steps>
    <next>
      <button type="button">NEXT</button>
    </next>
  </wizard>
  `,
})
class TestComponent {
  OneComponent = OneComponent;
  TwoComponent = TwoComponent;
  ThreeComponent = ThreeComponent;
}

@Component({
  selector: 'one',
  template: `Template One`,
})
class OneComponent { }

@Component({
  selector: 'two',
  template: `Template Two`,
})
class TwoComponent { }

@Component({
  selector: 'three',
  template: `Template Three`,
})
class ThreeComponent { }

@NgModule({
  entryComponents: [
    OneComponent,
    TwoComponent,
    ThreeComponent,
  ],
})
class TestModule { }

@Component({
  selector: 'test-two',
  template: `
  <wizard>
    <title></title>
    <progress></progress>
    <viewer></viewer>
    <next>
      <button type="button">NEXT</button>
    </next>
  </wizard>
  `,
})
class TestTwoComponent { }

fdescribe('WizardComponent forChild', () => {
  let debugElement: DebugElement;
  let fixture: ComponentFixture<TestTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestTwoComponent,

        OneComponent,
        TwoComponent,
        ThreeComponent,
      ],
      imports: [
        WizardModule.forChild({
          steps: [
            {
              component: OneComponent,
              label: 'Label One',
              title: 'Title One',
            },
            {
              component: TwoComponent,
              label: 'Label Two',
              title: 'Title Two',
            },
            {
              component: ThreeComponent,
              label: 'Label Three',
              title: 'Title Three',
            },
          ],
        }),
      ],
      //schemas: [
        //NO_ERRORS_SCHEMA,
      //],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTwoComponent);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should ...', () => {
    debugElement
      .query(By.directive(NextComponent))
      .triggerEventHandler('click', getDOM().createMouseEvent('click'));

    debugElement
      .query(By.directive(NextComponent))
      .triggerEventHandler('click', getDOM().createMouseEvent('click'));

    console.info('\x1b[33m<<<');
    console.info(debugElement.nativeElement);
    console.info('>>>\x1b[0m');
  });
});

describe('WizardComponent', () => {
  let debugElement: DebugElement;
  let fixture: ComponentFixture<TestComponent>;
  //let testComponent: TestComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,

        OneComponent,
        TwoComponent,
        ThreeComponent,
      ],
      imports: [
        TestModule,
        WizardModule,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    //testComponent = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should ...', () => {
    const nextDe = debugElement.query(By.directive(NextComponent));

    nextDe.triggerEventHandler('click', getDOM().createMouseEvent('click'));

    console.info('\x1b[33m<<<');
    console.info(debugElement.nativeElement);
    console.info('>>>\x1b[0m');
  });
});
