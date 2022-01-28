import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-immobilier',
  templateUrl: './update-immobilier.component.html',
  styleUrls: ['./update-immobilier.component.css']
})
export class UpdateImmobilierComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onContinue1(): void{
    this.router.navigateByUrl('L-immobiliers');
}

}
