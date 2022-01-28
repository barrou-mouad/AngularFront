import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractComponent } from './contract/contract.component';
import { GestionAccountComponent } from './gestion-account/gestion-account.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { GestionContractComponent } from './gestion-contract/gestion-contract.component';
import { GestionImmobilierComponent } from './gestion-immobilier/gestion-immobilier.component';
import { GestionComponent } from './gestion/gestion.component';
import { HomeComponent } from './home/home.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ListContractsComponent } from './list-contracts/list-contracts.component';
import { ListImmobiliersComponent } from './list-immobiliers/list-immobiliers.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:HomeComponent},
  {path:'contact', component:ContractComponent},
  {path:'gestion', component:GestionComponent},
  {path:'g-immobilier', component:GestionImmobilierComponent},
  {path:'g-contract', component:GestionContractComponent},
  {path:'g-client', component:GestionClientComponent},
  {path:'g-account', component:GestionAccountComponent},
  {path:'L-clients', component:ListClientsComponent},
  {path:'L-immobiliers', component:ListImmobiliersComponent},
  {path:'L-accounts', component:ListAccountsComponent},
  {path:'L-contracts', component:ListContractsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
