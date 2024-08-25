import { Component } from '@angular/core';
import { account } from '../../lib/appwrite';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <p>
      user works!
      <button mat-flat-button (click)="logout()">Logout</button>
    </p>
  `,
})
export class UserComponent {
  constructor (private router: Router) {}

  async logout() {
    const result = await account.deleteSession('current');
    // console.log(result);
    this.router.navigate(['/login'])
  }
}
