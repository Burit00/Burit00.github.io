/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AttractblockComponent } from './attractblock.component';

describe('AttractblockComponent', () => {
  let component: AttractblockComponent;
  let fixture: ComponentFixture<AttractblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
