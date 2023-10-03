import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { CommonModule } from '@angular/common';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';

@NgModule({
  imports: [CommonModule, AlunosRoutingModule],
  exports: [],
  declarations: [AlunosComponent, AlunosFormComponent, AlunoDetalheComponent],
  providers: [AlunosService],
})
export class AlunosModule {}
