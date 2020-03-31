import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImkereiComponent } from './imkerei.component';

describe('ImkereiComponent', () => {
  let component: ImkereiComponent;
  let fixture: ComponentFixture<ImkereiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImkereiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImkereiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
