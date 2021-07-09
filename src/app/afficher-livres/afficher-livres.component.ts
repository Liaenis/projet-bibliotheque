import { Component, Input, OnInit } from '@angular/core';
import { Livre } from '../livre.model';

@Component({
  selector: 'app-afficher-livres',
  templateUrl: './afficher-livres.component.html',
  styleUrls: ['./afficher-livres.component.scss']
})
export class AfficherLivresComponent implements OnInit {
  listeLivres: Livre[] = [];
  @Input() paraLivre?:Livre;
  constructor() { }

  ngOnInit(): void {
  }

}
