import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list-immobiliers',
  templateUrl: './list-immobiliers.component.html',
  styleUrls: ['./list-immobiliers.component.css']
})
export class ListImmobiliersComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }
  onContinue1(): void{
    this.router.navigateByUrl('g-immobilier');
}

}
