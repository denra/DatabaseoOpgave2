import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsOnWaitinglistComponent } from './patients-on-waitinglist.component';

describe('PatientsOnWaitinglistComponent', () => {
  let component: PatientsOnWaitinglistComponent;
  let fixture: ComponentFixture<PatientsOnWaitinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsOnWaitinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsOnWaitinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
