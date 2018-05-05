import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpatientsComponent } from './inpatients.component';

describe('InpatientsComponent', () => {
  let component: InpatientsComponent;
  let fixture: ComponentFixture<InpatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
