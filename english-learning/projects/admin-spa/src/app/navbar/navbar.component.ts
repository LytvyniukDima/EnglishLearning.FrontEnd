import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authorization/serives/auth.service';

@Component({
  selector: 'admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public authService: AuthService;

  constructor(private myAuthService: AuthService) { 
    this.authService = myAuthService;
  }

  ngOnInit(): void {
  }
}
