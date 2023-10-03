import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosService } from './cursos/cursos.service';
import { AppRoutingModule } from './app.routing.module';
//import { AlunosModule } from './alunos/alunos.module';
import { AuthService } from './login/auth.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CursosDetalheComponent } from './cursos/cursos-detalhe/cursos-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
    CursosDetalheComponent /*,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //CursosModule,
    //AlunosModule,
    AppRoutingModule,
    routing,
  ],
  // providers: [AuthService, AuthGuard, CursosGuard, AlunosGuard],
  providers: [CursosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
