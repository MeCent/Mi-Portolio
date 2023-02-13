import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RegistroComponent } from './registro/registro.component';
import { PanelControlComponent } from './panel-control/panel-control.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FormacionComponent } from './formacion/formacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { EditBannerComponent } from './panel-control/edit-banner/edit-banner.component';
import { EditExperienciaComponent } from './panel-control/edit-experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './panel-control/edit-educacion/edit-educacion.component';
import { EditHabilidadesComponent } from './panel-control/edit-habilidades/edit-habilidades.component';
import { EditProyectosComponent } from './panel-control/edit-proyectos/edit-proyectos.component';
import { EditInfoComponent } from './panel-control/edit-info/edit-info.component';
import { EditRedesComponent } from './panel-control/edit-redes/edit-redes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { intercetorProvider } from './service/interceptor-service';
import { NewExperiienciaComponent } from './experiencia/new-experiiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    LoginComponent,
    ErrorComponent,
    RegistroComponent,
    PanelControlComponent,
    BannerComponent,
    ExperienciaComponent,
    FormacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    EditBannerComponent,
    EditExperienciaComponent,
    EditEducacionComponent,
    EditHabilidadesComponent,
    EditProyectosComponent,
    EditInfoComponent,
    EditRedesComponent,
    NewExperiienciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    intercetorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
