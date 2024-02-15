import { NumberSymbol } from "@angular/common";

export interface Materia {
    id: number;
    titolo: string;
    icona: string;
}

export interface Risposta {
    testo: string;
    giusta: boolean;
}

export interface Domanda {
    testo: string;
    risposte: Risposta[];
}

export interface DomandeSuArgomento {
    id: number;
    domande: Domanda[];
}

export interface Risultato {
    id_domanda: number;
    domanda: string;
    risposte: Risposta[];
}