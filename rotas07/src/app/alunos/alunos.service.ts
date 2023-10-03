import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private alunos: any[] = [
    { id: 1, nome: 'Alunos 01', email: 'aluno01@gmail.com' },
    { id: 2, nome: 'Alunos 02', email: 'aluno02@gmail.com' },
    { id: 3, nome: 'Alunos 03', email: 'aluno03@gmail.com' },
  ];

  getAlunos() {
    return this.alunos;
  }
  constructor() {}
}
