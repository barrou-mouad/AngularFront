import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-gestion-account',
  templateUrl: './gestion-account.component.html',
  styleUrls: ['./gestion-account.component.css']
})
export class GestionAccountComponent implements OnInit {

  constructor(private http:HttpClient,private auth:AuthService) { }
  nom="";
  client:any;
  ngOnInit(): void {

  }
  test(myform:any){
    myform.value['client']=this.client
   console.log(myform.value)
   this.http.post("http://localhost:9191/client/account/"+this.client.id,myform.value).subscribe(
    (res:any)=>{
      console.log(res)
    },
    (error:any)=>{
      console.log(error)
    }
  )
  }
  getClient(code:string){
    this.http.get("http://localhost:9191/client/code/"+code).subscribe(
      (res:any)=>{
        console.log(res)
        this.client=res;
        this.nom=res.nom + ' '+res.prenom
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
}
