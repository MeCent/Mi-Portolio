import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(
    private skills: Skil) {}

  ngOnInit(): void {
  }

}
