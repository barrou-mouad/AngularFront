import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  //route vers gestion client
  onContinue1(): void{
    this.router.navigateByUrl('g-client');
}
//route vers gestion immobilier
  onContinue2(): void{
  this.router.navigateByUrl('g-immobilier');
}
//route vers gestion contrat
  onContinue3(): void{
  this.router.navigateByUrl('g-contract');
}

}
