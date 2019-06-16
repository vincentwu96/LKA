/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SummerCampComponent } from './summer-camp.component';

describe('SummerCampComponent', () => {
  let component: SummerCampComponent;
  let fixture: ComponentFixture<SummerCampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummerCampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
