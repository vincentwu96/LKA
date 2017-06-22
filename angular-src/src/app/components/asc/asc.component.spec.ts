/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ASCComponent } from './asc.component';

describe('ASCComponent', () => {
  let component: ASCComponent;
  let fixture: ComponentFixture<ASCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ASCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ASCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
