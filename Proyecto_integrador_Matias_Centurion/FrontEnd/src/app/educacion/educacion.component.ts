import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit  {
  educacion: Educacion[] = [];

  constructor(private educacionS: Educacion) {}

  ngOnInit(): void {

  }
}
