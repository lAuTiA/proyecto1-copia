import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto1';
  persona={
    nombre: "Julian",
    apellido: "Alvarez",
    alias: "mi amor",
    edad: 22
  }
  persona1={
    nombre: "Brenda",
    apellido: "Rodriguez",
    alias: "Bren",
    edad :17
  }
}

