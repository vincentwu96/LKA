/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EwComponent } from './ew.component';

describe('EwComponent', () => {
  let component: EwComponent;
  let fixture: ComponentFixture<EwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
