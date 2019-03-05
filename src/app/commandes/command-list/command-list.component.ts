import { Component, OnInit } from '@angular/core';
import {CommandeService} from '../../controller/service/commande.service';
import {Commande} from '../../controller/model/commande.model';




@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {

  constructor(private commandeService: CommandeService) { }

  ngOnInit() {
  }


  public findCommandeItemByReference(c:Commande){
    this.commandeService.findCommandeItemByReference(c);
  }

  public get commandes() {
    return this.commandeService.commandes;
  }

  public get commandeSelected() {
    return this.commandeService.commandeSelected;
  }

}
