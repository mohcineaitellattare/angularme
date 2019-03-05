import { Component, OnInit } from '@angular/core';
import {CommandeService} from '../../controller/service/commande.service';

@Component({
  selector: 'app-command-create',
  templateUrl: './command-create.component.html',
  styleUrls: ['./command-create.component.css']
})
export class CommandCreateComponent implements OnInit {

  constructor(private commandeService: CommandeService) { }

  ngOnInit() {
  }
 public get commande() {
    return this.commandeService.commandeCreate;
 }

  public get commandeItem() {
    return this.commandeService.commandeItemCreate;
  }

  public get commandeItems() {
    return this.commandeService.commandeCreate.commandeItemVos;
  }

  public addCommandeItem(){
    return this.commandeService.addCommandeItem();
  }

  public saveCommande(){
    this.commandeService.saveCommande();
  }

  public fournisseurs(){
    return this.commandeService.fournisseurs;
  }
}
