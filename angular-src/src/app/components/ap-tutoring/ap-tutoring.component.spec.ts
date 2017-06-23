/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApTutoringComponent } from './ap-tutoring.component';

describe('ApTutoringComponent', () => {
  let component: ApTutoringComponent;
  let fixture: ComponentFixture<ApTutoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApTutoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApTutoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
