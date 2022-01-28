import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-contract',
  templateUrl: './gestion-contract.component.html',
  styleUrls: ['./gestion-contract.component.css']
})
export class GestionContractComponent implements OnInit {
  immobilier:any;
  owner:any
  bayer:any
  rec:any={}
  account={
    "address":"",
    "privateKey":""
  }

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  onContinue1(): void{
    this.router.navigateByUrl('L-contracts');
}
checkim(code1:any){
this.http.get("http://localhost:9191/immobilier/code/"+code1).subscribe(
(res:any)=>{
  console.log(res)
  this.immobilier=res
  this.owner=this.immobilier.client
  this.account.privateKey=this.owner.accounts[0].privateKey
}
)
}
/*


*/
checkcl(code2:string){
  this.http.get("http://localhost:9191/client/code/"+code2).subscribe(
    (res:any)=>{
      console.log(res)
      this.bayer=res
      this.account.address=this.bayer.accounts[0].address
    }
    )
}
async valider(myform:any){
  console.log(myform)
  console.log("result is "+JSON.stringify(this.account) )
  await this.http.post("http://localhost:9191/ethereum/transaction",this.account).subscribe(
    async (res)=>{
      console.log("1")
      if(await res==false){
      await  this.get(myform)
      }
    }
    )

}
async get(myform:any){
  console.log("2")

  this.rec['c']['owner']=this.bayer;
  this.rec['c']['owner']=this.owner;
  this.rec['c']['immobilier']=this.immobilier;
  this.rec['c']['cout']=myform.cout
  this.rec['a']=this.account


  this.http.post("http://localhost:9191/contrat/save",this.rec).subscribe(
    res=>{
      this.http.post("http://localhost:9191/ethereum/add",res).subscribe(
        res=>{

        }
      )
    }
  )
}
}
