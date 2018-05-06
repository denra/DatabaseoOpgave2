import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinpatientinwardComponent } from './getinpatientinward.component';

describe('GetinpatientinwardComponent', () => {
  let component: GetinpatientinwardComponent;
  let fixture: ComponentFixture<GetinpatientinwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetinpatientinwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinpatientinwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
