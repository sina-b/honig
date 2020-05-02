import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SachkundenachweisComponent } from './sachkundenachweis.component';

describe('SachkundenachweisComponent', () => {
  let component: SachkundenachweisComponent;
  let fixture: ComponentFixture<SachkundenachweisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SachkundenachweisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SachkundenachweisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
