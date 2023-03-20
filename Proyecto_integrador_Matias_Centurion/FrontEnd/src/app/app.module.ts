import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RegistroComponent } from './registro/registro.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HysComponent } from './hys/hys.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { intercetorProvider } from './service/interceptor-service';
import { NewExperiienciaComponent } from './experiencia/new-experiiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './educacion/new-educacion.component';
import { EditEducacionComponent } from './educacion/edit-educacion.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    LoginComponent,
    ErrorComponent,
    RegistroComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    NewExperiienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,


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
