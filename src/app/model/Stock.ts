import { Produit } from "./Produit";

export class Stock {
    idStock!:number;
    qte!:number;
    qteMin!:number;
    libelleStock!:String;
    produits!:Produit[];
    
}