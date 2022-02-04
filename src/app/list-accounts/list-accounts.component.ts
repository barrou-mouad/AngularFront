import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  onContinue1(): void{
    this.router.navigateByUrl('g-account');
}

}
