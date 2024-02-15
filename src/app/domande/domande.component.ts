import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { SoundService } from '../services/sound.service';
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
  domandaCorrente!: Domanda;
  risposteMescolate!: Risposta[];
  domandeFatte = 0;
  indiceCliccato = -1;

  constructor(private quizService: QuizService,
              private route: ActivatedRoute,
              private router: Router,
              private soundService: SoundService){}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");  
    this.domandeScelte = this.quizService.getSampleDomande(Number(this.id),this.quizService.NUMERO_DOMANDE);
    this.setNewQuestion();
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
    //Impedisco ulteriori click dopo aver già dato la risposta alla domanda corrente
    if(this.indiceCliccato != -1) return;
    this.domandeFatte += 1;
    this.indiceCliccato = index;
    if(risposta.giusta) this.soundService.playAudio('giusto');
    else this.soundService.playAudio('sbagliato');
    
    this.saveRisposta(risposta);
    
    setTimeout(() => {
      if(this.domandeFatte === this.quizService.NUMERO_DOMANDE){
        this.router.navigateByUrl("risultati");
        return;
      }
      this.setNewQuestion();
      
    },4000);
  }

  isClass(risposta: Risposta,className: string,index: number): boolean {
    if(this.indiceCliccato !== -1){
      if(risposta.giusta && className==='giusta') return true;
      if(!risposta.giusta && className==='sbagliata' && this.indiceCliccato === index) return true;
    }
    return false;
  }

  setNewQuestion() {
    this.domandaCorrente = this.getRandomQuestion();
    this.risposteMescolate = this.getAnswersShuffled();
    this.indiceCliccato = -1;
    this.soundService.playAudio('loop');
  }

  saveRisposta(risposta: Risposta){
    let risposteRiepilogo: Risposta[] = [];

    risposteRiepilogo.push({...risposta});
    if(!risposta.giusta) {
      let rispostaGiusta = this.domandaCorrente.risposte.find(risp => risp.giusta);
      if(rispostaGiusta) risposteRiepilogo.push({...rispostaGiusta});
    }

    this.quizService.saveResponse({
      id_domanda: this.domandeFatte,
      domanda: this.domandaCorrente.testo,
      risposte: risposteRiepilogo
    });
  }

}
