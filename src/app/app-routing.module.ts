import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommandListComponent} from './commandes/command-list/command-list.component';
import {CommandCreateComponent} from './commandes/command-create/command-create.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
