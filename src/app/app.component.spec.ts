import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let debugElement: DebugElement;
  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('h1'));
  });

  it('should...', () => expect(appComponent).toBeDefined());

  it('should...', () => {
    fixture.detectChanges();
    const h1 = debugElement.nativeElement;
    expect(h1.innerText).toBe('App');
  });
});
