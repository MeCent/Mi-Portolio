import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { NewExperiienciaComponent } from './experiencia/new-experiiencia.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { EditExperienciaComponent } from './panel-control/edit-experiencia/edit-experiencia.component';
import { PanelControlComponent } from './panel-control/panel-control.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: '', component:IndexComponent },
  {path: 'login', component:LoginComponent },
  {path: 'nuevaexp', component:NewExperiienciaComponent},
  {path: 'editexp/:id', component:EditExperienciaComponent},
  {path: 'registro', component:RegistroComponent },
  {path: 'panel-control', component:PanelControlComponent },
  {path: '**', component:ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
