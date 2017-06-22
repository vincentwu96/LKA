/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IopComponent } from './iop.component';

describe('IopComponent', () => {
  let component: IopComponent;
  let fixture: ComponentFixture<IopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
