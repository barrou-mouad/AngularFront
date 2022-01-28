import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css']
})
export class GestionClientComponent implements OnInit {
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
test(input:NgForm){
  console.log("input : ")
  console.log(input.value)
  this.http.post("http://localhost:9191/client/save",input.value).subscribe(
    (res:any)=>{
     console.log(res)
    }
  )

}
}
