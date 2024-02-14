import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Domanda, Risposta } from '../type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-domande',
  templateUrl: './domande.component.html',
  styleUrls: ['./domande.component.css']
})
export class DomandeComponent implements OnInit{
  domandeScelte: Domanda[] = [];
  id!: string | null;
  NUMERO_DOMANDE = 3;
  domandaCorrente!: Domanda;
  risposteMescolate!: Risposta[];
  punteggio = 0;
  domandeFatte = 0;
  indiceCliccato = -1;

  constructor(private quizService: QuizService,
              private route: ActivatedRoute,
              private router: Router){}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");  
    this.domandeScelte = this.quizService.getSampleDomande(Number(this.id),this.NUMERO_DOMANDE);
    this.domandaCorrente = this.getRandomQuestion();
    this.risposteMescolate = this.getAnswersShuffled();
  }

  getRandomQuestion(): Domanda{
    let randIndex = Math.floor(Math.random()*this.domandeScelte.length);
    let domanda = this.domandeScelte[randIndex];
    this.domandeScelte.splice(randIndex,1);
    return domanda;
  }

  getAnswersShuffled(): Risposta[] {
    return this.domandaCorrente.risposte.sort(_ => Math.random() - 0.5);
  }

  checkRisposta(risposta: Risposta,index: number): void {
    this.domandeFatte += 1;
    this.indiceCliccato = index;

    if(risposta.giusta) this.punteggio += 1;
    
    setTimeout(() => {
      if(this.domandeFatte === this.NUMERO_DOMANDE){
        this.router.navigateByUrl("risultati");
        return;
      }

      this.domandaCorrente = this.getRandomQuestion();
      this.risposteMescolate = this.getAnswersShuffled();
      this.indiceCliccato = -1;
    },4000);
  }

  isClass(risposta: Risposta,className: string,index: number): boolean {
    if(this.indiceCliccato !== -1){
      if(risposta.giusta && className==='giusta') return true;
      if(!risposta.giusta && className==='sbagliata' && this.indiceCliccato === index) return true;
    }
    return false;
  }

}
