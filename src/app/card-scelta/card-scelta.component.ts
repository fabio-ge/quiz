import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-scelta',
  templateUrl: './card-scelta.component.html',
  styleUrls: ['./card-scelta.component.css']
})
export class CardSceltaComponent {
  @Input() icona: any;
  @Input() titolo: any;
  @Input() id: any;


}
