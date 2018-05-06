import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaintainSuppliersComponent } from './create-maintain-suppliers.component';

describe('CreateMaintainSuppliersComponent', () => {
  let component: CreateMaintainSuppliersComponent;
  let fixture: ComponentFixture<CreateMaintainSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMaintainSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMaintainSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
