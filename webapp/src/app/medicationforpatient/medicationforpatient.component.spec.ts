import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationforpatientComponent } from './medicationforpatient.component';

describe('MedicationforpatientComponent', () => {
  let component: MedicationforpatientComponent;
  let fixture: ComponentFixture<MedicationforpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationforpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationforpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
