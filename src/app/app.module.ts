import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContractComponent } from './contract/contract.component';
import { GestionComponent } from './gestion/gestion.component';
import { GestionContractComponent } from './gestion-contract/gestion-contract.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { GestionImmobilierComponent } from './gestion-immobilier/gestion-immobilier.component';
import { FormsModule } from '@angular/forms';
import { GestionAccountComponent } from './gestion-account/gestion-account.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ListContractsComponent } from './list-contracts/list-contracts.component';
import { ListImmobiliersComponent } from './list-immobiliers/list-immobiliers.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ContractComponent,
    GestionComponent,
    GestionContractComponent,
    GestionClientComponent,
    GestionImmobilierComponent,
    GestionAccountComponent,
    ListAccountsComponent,
    ListClientsComponent,
    ListContractsComponent,
    ListImmobiliersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
