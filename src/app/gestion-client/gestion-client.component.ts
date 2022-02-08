import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css']
})
export class GestionClientComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  //route vers la liste des clients
  onContinue1(): void{
    this.router.navigateByUrl('L-clients');
}

//Enregistrer le client
test(input:NgForm){
  console.log("input : ")
  console.log(input.value)
  this.http.post("http://localhost:9191/client/save",input.value).subscribe(
    (res:any)=>{
     console.log(res)
     this.router.navigateByUrl('L-clients')
    }
  )

}
}
