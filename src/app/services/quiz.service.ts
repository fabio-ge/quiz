import { Injectable } from '@angular/core';
import { DomandeSuArgomento, Materia, Domanda, Risultato } from '../type';

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

  domande: DomandeSuArgomento[] = [
    {
      id: 3, 
      domande: [
        { 
          testo: "Quanto fa 8*7 ?", 
          risposte: [
            {testo: "56",giusta: true},
            {testo: "58", giusta: false},
            {testo: "48", giusta: false},
            {testo: "60", giusta: false}
          ]
        },
        {
          testo: "Fabio entra a scuola alle 8 ed esce alle 13. Quanto dura la mattinata scolastica di Fabio?",
          risposte: [
            {testo: "5 ore", giusta: true},
            {testo: "4 ore", giusta: false},
            {testo: "3 settimane", giusta: false},
            {testo: "6 ore", giusta: false}
          ]
        },
        {
          testo: "Diego ha 36 figurine e ne regala la metà a Gaia, quante figure Diego dà a Gaia?",
          risposte: [
            {testo: "18", giusta: true},
            {testo: "17", giusta: false},
            {testo: "16", giusta: false},
            {testo: "19", giusta: false}
          ]
        },
        {
          testo: "Filippo gioca con gli amici e vince 7 figurine. Ora ne ha 12 in tutto. Quante figurine aveva prima di giocare?",
          risposte: [
            {testo: "5", giusta: true},
            {testo: "6", giusta: false},
            {testo: "4", giusta: false},
            {testo: "7", giusta: false}
          ]
        },
        {
          testo: "Sono un numero con 1h. La somma delle mie cifre fa 5 e la differenza di da e u è 0. Chi sono?",
          risposte: [
            {testo: "122", giusta: true},
            {testo: "133", giusta: false},
            {testo: "111", giusta: false},
            {testo: "230", giusta: false}
          ]
        },
        {
          testo: "Nel parcheggio della scuola ci sono 3 auto e 6 bici, quante ruote ci sono in tutto?",
          risposte: [
            {testo: "24", giusta: true},
            {testo: "22", giusta: false},
            {testo: "26", giusta: false},
            {testo: "20", giusta: false}
          ]
        },
        {
          testo: "Carlo Collodi, autore del libro “Le avventure di Pinocchio” è morto nel 1890 a 64 anni. In che anno era nato?",
          risposte: [
            {testo: "1826", giusta: true},
            {testo: "1836", giusta: false},
            {testo: "1827", giusta: false},
            {testo: "1830", giusta: false}
          ]
        },
        {
          testo: "Giulio aiuta la mamma a stendere il bucato. Per ogni calzino occorre una molletta, per ogni maglietta ne occorrono due. Se deve stendere 8 calzini e 3 magliette, di quante mollette ha bisogno?",
          risposte: [
            {testo: "14", giusta: true},
            {testo: "16", giusta: false},
            {testo: "12", giusta: false},
            {testo: "11", giusta: false}
          ]
        },
        {
          testo: "In una fattoria Arianna ha visto 6 cavalli. Complessivamente quante zampe, code e orecchie ha visto?",
          risposte: [
            {testo: "24, 6, 12", giusta: true},
            {testo: "22, 8, 10", giusta: false},
            {testo: "12, 6, 6", giusta: false},
            {testo: "20,10,5", giusta: false}
          ]
        },
        {
          testo: "Chiara ha una scatola con 169 perline colorate. Vuole formare dei braccialetti di 13 perline ciascuno. Quanti braccialetti potrà fare?",
          risposte: [
            {testo: "13", giusta: true},
            {testo: "14", giusta: false},
            {testo: "15", giusta: false},
            {testo: "12", giusta: false}
          ]
        },
        {
          testo: "Alla mensa della scuola mangiano 150 bambini. Nella sala mensa ci sono 25 tavoli uguali. In ogni tavolo si siede lo stesso numero di bambini. Quanti bambini si siedono in un tavolo?",
          risposte: [
            {testo: "6", giusta: true},
            {testo: "7", giusta: false},
            {testo: "8", giusta: false},
            {testo: "9", giusta: false}
          ]
        },
        {
          testo: "In tre prove Luca ha ottenuto i seguenti punteggi: 18, 16 e 14. Nelle stesse prove Anna ha ottenuto 12, 22 e 14 punti. Chi dei due ha vinto?",
          risposte: [
            {testo: "Luca", giusta: false},
            {testo: "Anna", giusta: false},
            {testo: "Pareggio", giusta: true},
            {testo: "Non si può dire", giusta: false}
          ]
        },
        {
          testo: "Giuseppe ha il doppio di libri di Francesca. Se Francesca ha 6 libri in meno di Giuseppe, quanti libri ha Giuseppe?",
          risposte: [
            {testo: "12", giusta: true},
            {testo: "14", giusta: false},
            {testo: "10", giusta: false},
            {testo: "16", giusta: false}
          ]
        },
        {
          testo: "La mamma di Noemi ha un’edicola dove vende i giornali. Ogni giorno vende 12 giornaletti per ragazzi. Quanti giornaletti per ragazzi vende in una settimana, se l’edicola è aperta tutti i giorni?",
          risposte: [
            {testo: "84", giusta: true},
            {testo: "86", giusta: false},
            {testo: "94", giusta: false},
            {testo: "76", giusta: false}
          ]
        },
        {
          testo: "In uno zoo ci sono 8 elefanti e 15 scimmie. Ogni scimmia mangia 5 banane al giorno. Gli altri animali non mangiano banane. Quante banane al giorno occorrono?",
          risposte: [
            {testo: "75", giusta: true},
            {testo: "80", giusta: false},
            {testo: "70", giusta: false},
            {testo: "65", giusta: false}
          ]
        },
        {
          testo: "Alla gita della scuola Sacro Cuore partecipano 120 persone tra alunni e maestre. Vengono utilizzati pullmini da 24 posti. Quanti pullmini occorrono?",
          risposte: [
            {testo: "5", giusta: true},
            {testo: "4", giusta: false},
            {testo: "6", giusta: false},
            {testo: "7", giusta: false}
          ]
        },
        {
          testo: "Vittoria sta leggendo un libro di 126 pagine. Ogni giorno legge 6 pagine. Continuando così, quante pagine leggerà in una settimana? In quante settimane riuscirà a leggere il libro?",
          risposte: [
            {testo: "42 pagine, 3 settimane", giusta: true},
            {testo: "36 pagine, 2 settimane", giusta: false},
            {testo: "36 pagine, 3 settimane", giusta: false},
            {testo: "42 pagine, 2 settimane", giusta: false}
          ]
        },
        {
          testo: "Michele possiede 15 cani, di cui 6 sono femmine. Dopo due mesi, ogni cagna ha partorito 3 cagnolini. Quanti cani possiede ora Michele?",
          risposte: [
            {testo: "33", giusta: true},
            {testo: "32", giusta: false},
            {testo: "34", giusta: false},
            {testo: "31", giusta: false}
          ]
        },
        {
          testo: "Federico fa 4 giri di pista nello stesso tempo in cui Gaia ne fa 3. Quando Gaia avrà percorso 12 giri, quanti giri avrà fatto Federico?",
          risposte: [
            {testo: "16", giusta: true},
            {testo: "14", giusta: false},
            {testo: "12", giusta: false},
            {testo: "20", giusta: false}
          ]
        },
        {
          testo: "Gabriele deve calcolare con l’aiuto della calcolatrice 46+12. Sbaglia e invece dell’operazione di addizione digita il tasto della sottrazione. Ottiene così 34. Quanto deve aggiungere al numero trovato per ottenere il risultato corretto dell’addizione?",
          risposte: [
            {testo: "24", giusta: true},
            {testo: "46", giusta: false},
            {testo: "12", giusta: false},
            {testo: "20", giusta: false}
          ]
        }
      ]
      
    }
  ];

  constructor() { }

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
