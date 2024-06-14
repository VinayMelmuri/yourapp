import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  myForm!:FormGroup;
  name = new FormControl('',[Validators.required]);
  email = new FormControl('',[Validators.required]);
  names:string[] = ['veer savarkar','bhagatsigh','sardar','atal'];
  filteredNames!: Observable<string[]>;

  ngOnInit(){
    this.filteredNames = this.name.valueChanges.pipe(startWith(''),map(value => this._filter(value || '')),);
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.names.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  submit(){

  }
}
