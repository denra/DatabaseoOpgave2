import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesInWardComponent } from './supplies-in-ward.component';

describe('SuppliesInWardComponent', () => {
  let component: SuppliesInWardComponent;
  let fixture: ComponentFixture<SuppliesInWardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliesInWardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliesInWardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
