import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficherLesLivresComponent } from './afficher-les-livres/afficher-les-livres.component';
import { AfficherLivresComponent } from './afficher-livres/afficher-livres.component';

@NgModule({
  declarations: [
    AppComponent,
    AfficherLesLivresComponent,
    AfficherLivresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
