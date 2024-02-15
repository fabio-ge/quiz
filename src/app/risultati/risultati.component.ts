import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Risultato } from '../type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-risultati',
  templateUrl: './risultati.component.html',
  styleUrls: ['./risultati.component.css']
})
export class RisultatiComponent implements OnInit{
  risultati!: Risultato[];
  punteggio!: number;
  numeroDomande = this.quizService.NUMERO_DOMANDE;

  constructor(private quizService: QuizService,
              private router: Router){}

  ngOnInit(): void {
      this.risultati = this.quizService.getRiepilogo();
      this.punteggio = this.quizService.getPunteggioFinale();
  }

  nuovaPartita(){
    this.router.navigateByUrl("/");
  }

}
