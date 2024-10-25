import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArraysComponent } from './form-arrays.component';

describe('FormArraysComponent', () => {
  let component: FormArraysComponent;
  let fixture: ComponentFixture<FormArraysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormArraysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
