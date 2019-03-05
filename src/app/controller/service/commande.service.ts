import { Injectable } from '@angular/core';
import {Commande} from '../model/commande.model';
import {CommandeItem} from '../model/commande-item.model';
import {HttpClient} from '@angular/common/http';
import {Fournisseur} from '../model/fournisseur.model';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private _url:string = "http://localhost:8099/faculte-commande/commandes/";
  private _url1:string = "http://localhost:8099/faculte-commande/fournisseurs/finAll";

  private _commandeCreate:Commande = new Commande('' ,0,'');
  private _commandeItemCreate:CommandeItem = new CommandeItem('',0,0);
  private _commandes:Array<Commande>;
  private _commandeSelected:Commande;
  private _fournisseurs:Array<Fournisseur>;
  constructor(private http:HttpClient) { }

  public addCommandeItem() {
    this.commandeCreate.total+=this.commandeItemCreate.prix*this.commandeItemCreate.qte;
    let commandeItemClone = new CommandeItem(this.commandeItemCreate.referenceProduit,this.commandeItemCreate.prix,this.commandeItemCreate.qte);
    this.commandeCreate.commandeItemVos.push(commandeItemClone);
    this.commandeItemCreate=new CommandeItem("",0,0);
  }

  public saveCommande(){
    this.http.post<Commande>(this._url,this.commandeCreate).subscribe({
      next: data=>{
      console.log("ok");
      this.commandeCreate = new Commande('',0,'');
      this.commandeItemCreate = new CommandeItem("",0,0);
    } , error: error=>{
      console.log("erreur");
    }
    });

  }

  public findCommandeItemByReference(commande:Commande){
    this._commandeSelected=commande;
    if(this.commandeSelected !=null){
    this.http.get<Array<CommandeItem>>(this._url+"/reference/"+this.commandeSelected.reference+"/commande-items").subscribe(
      data =>{
        this.commandeSelected.commandeItemVos = data;
      } , error =>{
        console.log("error whith loading commandes items");
      }
    );
    }
  }


  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get commandeCreate(): Commande {
    return this._commandeCreate;
  }

  set commandeCreate(value: Commande) {
    this._commandeCreate = value;
  }

  get commandeItemCreate(): CommandeItem {
    return this._commandeItemCreate;
  }

  set commandeItemCreate(value: CommandeItem) {
    this._commandeItemCreate = value;
  }

  get commandes(): Array<Commande> {
    if(this._commandes==null){
      this.http.get<Array<Commande>>(this._url).subscribe(
        data => {
          this._commandes = data;
        } ,  error=> {
          console.log("error whith loading commandes");
        }
      );
    }
    return this._commandes;
  }

  set commandes(value: Array<Commande>) {
    this._commandes = value;
  }

  get commandeSelected(): Commande {
    if(this._commandeSelected == null){
      this._commandeSelected = new Commande('',0,'');
    }
    return this._commandeSelected;
  }


  set commandeSelected(value: Commande) {
    this._commandeSelected = value;
  }


  get url1(): string {
    return this._url1;
  }

  set url1(value: string) {
    this._url1 = value;
  }

  get fournisseurs(): Array<Fournisseur> {
    if(this._fournisseurs==null) {
      this.http.get<Array<Fournisseur>>(this._url1).subscribe(
        data => {
          this._fournisseurs = data;
        } , error => {
          console.log("error whith loading fournisseurs");
        }
      );
    }
    return this._fournisseurs;
  }


  set fournisseurs(value: Array<Fournisseur>) {
    this._fournisseurs = value;
  }
}
