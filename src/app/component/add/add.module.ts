import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Add this line

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    AddRoutingModule,MatCardModule,
    MatButtonModule,MatFormFieldModule,
    FlexLayoutModule
  ]
})
export class AddModule { }