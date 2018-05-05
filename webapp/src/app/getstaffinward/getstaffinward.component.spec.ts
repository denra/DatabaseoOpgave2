import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstaffinwardComponent } from './getstaffinward.component';

describe('GetstaffinwardComponent', () => {
  let component: GetstaffinwardComponent;
  let fixture: ComponentFixture<GetstaffinwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetstaffinwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetstaffinwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
