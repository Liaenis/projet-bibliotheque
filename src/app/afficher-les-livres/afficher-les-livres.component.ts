import { Component, Input, OnInit } from '@angular/core';
import { LivreServiceService } from '../livre-service.service';
import { Livre } from '../livre.model';


@Component({
  selector: 'app-afficher-les-livres',
  templateUrl: './afficher-les-livres.component.html',
  styleUrls: ['./afficher-les-livres.component.scss']
})
export class AfficherLesLivresComponent implements OnInit {
  @Input() paraListeLivre?:Livre[];
  listelivre: Livre[];
  constructor() { 
    const service = new LivreServiceService()
    this.listelivre = service.ListerLivres();
  }

  ngOnInit(): void {
  }

}
