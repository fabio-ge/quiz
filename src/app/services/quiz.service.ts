import { Injectable } from '@angular/core';
import { DomandeSuArgomento, Materia, Domanda, Risultato } from '../type';
import storia from './json/storia.json';
import matematica from './json/matematica.json';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  NUMERO_DOMANDE = 10;
  risultati: Risultato[] = [];

  materie: Materia[] = [
             {id: 1,titolo: "STORIA",icona: "/assets/history.png"},
             {id: 2,titolo: "GEOGRAFIA",icona: "/assets/geo.png"},
             {id: 3,titolo: "MATEMATICA",icona: "/assets/math.png"},
             {id: 4,titolo: "SCIENZE",icona: "/assets/science.png"}
            ];

  domande: DomandeSuArgomento[] = [matematica,storia];

  constructor() { 
  }

  getMaterie(){
    return this.materie;
  }

  getSampleDomande(id: number,numero: number): Domanda[] {
    let domandeBuonePerArgomento: Domanda[] = this.domande
                                   .filter((el: DomandeSuArgomento) => el.id === id)
                                   .map((res: DomandeSuArgomento) => res.domande)[0];
    
    let maxDomande = domandeBuonePerArgomento.length;
    let indiciScelti: number[] = [];
    let domandeResp: Domanda[] = [];
    let randIndex;

    if(numero > maxDomande){
      throw "Si vuole costruire un campione di "+numero+" elementi, ma ce ne sono soltanto "+ maxDomande;
    }

    while(indiciScelti.length < numero){
      randIndex = Math.floor(Math.random() * maxDomande);
      if(!indiciScelti.includes(randIndex)){
        indiciScelti.push(randIndex);
        domandeResp.push(domandeBuonePerArgomento[randIndex]);
      } 
    }

    return domandeResp;

  }

  saveResponse(risultato: Risultato){
    /*Salva l' esito di una risposta in modo da costruire il resoconto finale*/
    this.risultati.push(risultato);
  }

  getRiepilogo(): Risultato[] {
    return this.risultati;
  }

  getPunteggioFinale(): number {
    if(this.risultati.length){
      return this.risultati.filter(ris => ris.risposte.length === 1).length;
    }

    return 0;
  }
}
