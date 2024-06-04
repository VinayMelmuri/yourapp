import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';


describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule,MatCardModule],
      declarations: [AddComponent]
    });
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
