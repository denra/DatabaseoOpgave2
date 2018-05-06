import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemaintainrequisitionsComponent } from './createmaintainrequisitions.component';

describe('CreatemaintainrequisitionsComponent', () => {
  let component: CreatemaintainrequisitionsComponent;
  let fixture: ComponentFixture<CreatemaintainrequisitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemaintainrequisitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemaintainrequisitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
