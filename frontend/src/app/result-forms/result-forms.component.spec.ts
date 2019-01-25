import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFormsComponent } from './result-forms.component';

describe('ResultFormsComponent', () => {
  let component: ResultFormsComponent;
  let fixture: ComponentFixture<ResultFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
