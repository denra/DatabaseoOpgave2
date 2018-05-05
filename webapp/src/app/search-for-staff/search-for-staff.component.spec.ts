import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForStaffComponent } from './search-for-staff.component';

describe('SearchForStaffComponent', () => {
  let component: SearchForStaffComponent;
  let fixture: ComponentFixture<SearchForStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
