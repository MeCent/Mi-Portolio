import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './educacion/edit-educacion.component';
import { NewEducacionComponent } from './educacion/new-educacion.component';
import { ErrorComponent } from './error/error.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NewExperiienciaComponent } from './experiencia/new-experiiencia.component';
import { EditHysComponent } from './hys/edit-hys.component';
import { NewHysComponent } from './hys/new-hys.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: '', component:IndexComponent },
  {path: 'login', component:LoginComponent },
  {path: 'nuevaexp', component:NewExperiienciaComponent},
  {path: 'editexp/:id', component:EditExperienciaComponent},
  {path: 'nuevaedu', component:NewEducacionComponent},
  {path: 'editedu/:id', component:EditEducacionComponent},
  {path: 'nuevahys', component:NewHysComponent},
  {path: 'edithys/:id', component:EditHysComponent},
  {path: 'bar', component:ProgressbarComponent},
  {path: 'registro', component:RegistroComponent},
  {path: '**', component:ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
