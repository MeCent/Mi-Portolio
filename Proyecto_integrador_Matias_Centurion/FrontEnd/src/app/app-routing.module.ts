import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEducacionComponent } from './educacion/new-educacion.component';
import { ErrorComponent } from './error/error.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NewExperiienciaComponent } from './experiencia/new-experiiencia.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: '', component:IndexComponent },
  {path: 'login', component:LoginComponent },
  {path: 'nuevaexp', component:NewExperiienciaComponent},
  {path: 'editexp/:id', component:EditExperienciaComponent},
  {path: 'nuevaedu', component:NewEducacionComponent},
  {path: 'registro', component:RegistroComponent },
  {path: '**', component:ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
