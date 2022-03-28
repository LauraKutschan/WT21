import {Component} from '@angular/core';
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  loggedIn: boolean = false;

  constructor(private auth: AuthService) {}

  checkIfLoggedIn(): boolean {
    this.loggedIn = this.auth.isAuthenticated();
    return this.loggedIn;
  }

  logout(): void {
    this.auth.logout();
  }
}
