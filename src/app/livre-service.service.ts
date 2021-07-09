import { Injectable } from '@angular/core';
import { Livre } from './livre.model';

@Injectable({
  providedIn: 'root'
})

export class LivreServiceService {
  private listeLivres!: Livre[];
  
  constructor() { 
    //this.listeLivres = [];

    const LaRoueDuTemps = new Livre('La roue du temps', 52320, 'Robert Jordan');
    const lAssassinRoyal = new Livre('L\'assassin royal', 76842, 'Robin Hoob');
    const malleus = new Livre('Malleus', 64175, 'Dan Abnett');
  }

  ajouterLivre(paraLivre : Livre){
    this.listeLivres.push(paraLivre);
  }

  rechargerListe(paraListeLivre : Livre[]){
    this.listeLivres = paraListeLivre;
  }

  ListerLivres(){
    return this.listeLivres;
  }

}
