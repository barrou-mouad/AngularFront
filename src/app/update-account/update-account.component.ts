import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  constructor(private router: Router,) { }


  ngOnInit(): void {
  }

  onContinue1(): void{
    this.router.navigateByUrl('L-accounts');
}

}
