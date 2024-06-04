import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  myForm!:FormGroup;
  name = new FormControl('',[Validators.required]);
  email = new FormControl('',[Validators.required]);

  submit(){

  }
}
