import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Materia } from '../type';

@Component({
  selector: 'app-scegli-argomento',
  templateUrl: './scegli-argomento.component.html',
  styleUrls: ['./scegli-argomento.component.css']
})
export class ScegliArgomentoComponent implements OnInit{
  materie: Materia[] = [];
  constructor(private quizService: QuizService){}

  ngOnInit(): void {
      this.materie = this.quizService.getMaterie();
  }



}
