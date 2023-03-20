import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from '../model/skills';
import { SkillsService } from '../service/skills.service';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(
    private skillsS: SkillsService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skills(this.nombre, this.porcentaje);
    this.skillsS.save(skill).subscribe({
      next: (data) => {
        alert('Habilidad añadida');
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Falló');
        this.router.navigate(['']);
      },
    });
  }

}
