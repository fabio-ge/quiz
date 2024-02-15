import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  giusto = new Audio('/assets/correct.mp3');
  sbagliato = new Audio('/assets/wrong.mp3');
  loop = new Audio('/assets/quiz-game-music-loop.mp3');

  constructor() { }

  playAudio(name: string): void {
    this.loop.pause();
    
    switch (name) {
      case 'giusto':
        this.giusto.play();
        setTimeout(() => {
          this.giusto.pause();
          this.giusto.load();
        },1200);
        break;
      case 'sbagliato':
        this.sbagliato.play();
        setTimeout(() => {
          this.sbagliato.pause();
          this.sbagliato.load();
        },1200);
        break;
      case 'loop':
        this.loop.load();
        this.loop.play();
        break;
      default:
        console.log(`Sorry, non ci sono suoni per ${name}.`);
    }
    
  }
}
