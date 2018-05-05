import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUpdatePatientsComponent } from './get-update-patients.component';

describe('GetUpdatePatientsComponent', () => {
  let component: GetUpdatePatientsComponent;
  let fixture: ComponentFixture<GetUpdatePatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUpdatePatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUpdatePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
