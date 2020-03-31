import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HonigComponent } from './honig.component';

describe('HonigComponent', () => {
  let component: HonigComponent;
  let fixture: ComponentFixture<HonigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HonigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HonigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
