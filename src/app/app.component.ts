import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public auth: AuthService, private router: Router) {}

  logOut() {
    this.router.navigate(['/']);
  }
}
