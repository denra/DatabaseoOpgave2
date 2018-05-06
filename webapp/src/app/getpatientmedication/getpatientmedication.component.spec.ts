import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpatientmedicationComponent } from './getpatientmedication.component';

describe('GetpatientmedicationComponent', () => {
  let component: GetpatientmedicationComponent;
  let fixture: ComponentFixture<GetpatientmedicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetpatientmedicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpatientmedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
