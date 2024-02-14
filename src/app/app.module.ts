import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScegliArgomentoComponent } from './scegli-argomento/scegli-argomento.component';
import { CardSceltaComponent } from './card-scelta/card-scelta.component';
import { DomandeComponent } from './domande/domande.component';
import { RisultatiComponent } from './risultati/risultati.component';

@NgModule({
  declarations: [
    AppComponent,
    ScegliArgomentoComponent,
    CardSceltaComponent,
    DomandeComponent,
    RisultatiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
