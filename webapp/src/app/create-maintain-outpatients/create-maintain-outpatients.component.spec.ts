import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaintainOutpatientsComponent } from './create-maintain-outpatients.component';

describe('CreateMaintainOutpatientsComponent', () => {
  let component: CreateMaintainOutpatientsComponent;
  let fixture: ComponentFixture<CreateMaintainOutpatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMaintainOutpatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMaintainOutpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
