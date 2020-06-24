import { Component } from '@angular/core';
import { Actor } from './Entidades/Actor';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form';
  datos: any = { Nombre: "", Apellido: "", Edad: "" };
  constructor() {    
  }

  onFormSubmit(userForm: NgForm) {
     console.log(userForm);
     console.log(userForm.form.controls.Nombre.value);
     console.log(userForm.form.controls['Apellido'].value);
     console.log(userForm.form.controls['Edad'].value);
  }

  resetForm(userForm: NgForm) {
    userForm.resetForm({ Nombre: "", Apellido: "", Edad: "" });
  }
}
