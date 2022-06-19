import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }
  gotoEmployee() {
    this.router.navigate(['/employee']);

  }
  gotomenu() {
    this.router.navigate(['/menu']);

  }
  gotoabout() {
    this.router.navigate(['/about']);

  }
}
