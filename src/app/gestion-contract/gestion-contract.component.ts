import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-contract',
  templateUrl: './gestion-contract.component.html',
  styleUrls: ['./gestion-contract.component.css']
})
export class GestionContractComponent implements OnInit {
  immobilier:any;
  owner:any
  bayerName=""
  bayer:any
  ownerName:string="";
  rec:any={}
  account={
    "address":"",
    "privateKey":""
  }
  contrat:any

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
  this.ownerName=this.owner.nom+' '+this.owner.prenom
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
      this.bayerName=this.bayer.nom+' '+this.bayer.prenom
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
async get(myform:NgForm){
  myform.value["bayer"]=this.bayer;
  myform.value["owner"]=this.immobilier.client;
  myform.value["immobilier"]=this.immobilier;
  console.log(myform.value)
  this.http.post("http://localhost:9191/contrat/save",myform.value).subscribe(
    (res:any)=>{
       /* this.contrat=res.data */
       console.log(res)
       this.contrat = {
         id:res.id,
         owner:res.owner.id,
         cout:res.cout
       }
      // this.contrat=JSON.parse(this.contrat)
      console.log(this.contrat)
      this.http.post("http://localhost:9191/ethereum/add",this.contrat).subscribe(
        (res)=>{
         console.log("test")
         this.immobilier.client=this.bayer
         this.http.post("http://localhost:9191/immobilier/save/",this.immobilier).subscribe(
          (res:any)=>{
            console.log(res)
            this.router.navigateByUrl('L-contracts');

          },
          (error:any)=>{
            console.log(error)
          }
        )
        },
        (error)=>{}
      )
    },
    (error)=>{}
  )
}
}
