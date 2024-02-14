import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScegliArgomentoComponent } from './scegli-argomento/scegli-argomento.component';
import { DomandeComponent } from './domande/domande.component';
import { RisultatiComponent } from './risultati/risultati.component';

const routes: Routes = [
  { path:"",component: ScegliArgomentoComponent},
  { path: "domande/:id",component: DomandeComponent},
  { path: "risultati", component: RisultatiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
