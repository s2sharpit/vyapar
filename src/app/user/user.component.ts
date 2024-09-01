import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/appwrite/auth.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  template: `
    <p>
      user works!
      <button mat-flat-button (click)="auth.logout()">Logout</button>
      <!-- <a mat-flat-button routerLink='/login'>Login</a> -->
    </p>
  `,
})
export class UserComponent {
  auth: AuthService = inject(AuthService);
}
