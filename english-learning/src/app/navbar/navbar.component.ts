import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authorization/serives/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public authService: AuthService;

  constructor(private myAuthService: AuthService) {
      this.authService = myAuthService;
   }

  ngOnInit() {
  }

}
