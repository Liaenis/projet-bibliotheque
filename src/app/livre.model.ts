export class Livre {
    
    titre : string;
    numeroISBN : number;
    auteur : string;

    constructor (paraTitre : string, paraNumeroISBN : number, paraAuteur : string){
        this.titre = paraTitre;
        this.numeroISBN = paraNumeroISBN;
        this.auteur = paraAuteur;
    }
}
