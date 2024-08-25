import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { account, ID } from '../../lib/appwrite';
import { NavigationService } from '../services/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule],
  template: `
    <main class="w-11/12 mx-auto py-4 grid place-items-center gap-6">
      <h4 class="text-primary">Vyapar</h4>
      <img src="https://s2sharpit.me/dp" alt="logo" class="rounded-3xl w-48" />
      <div class="">
        <div class="mb-5">
          <h6 class="w-full text-primary">Login</h6>
          <p>Enter your mobile number and OTP to login into your account.</p>
        </div>
        @if (user() == '') {
        <form class="grid place-items-center">
          <mat-form-field >
            <mat-label>Enter Mobile Number</mat-label>
            <input matInput value="+91" #reg />
            <mat-icon matSuffix>help_outline</mat-icon>
            <!-- <mat-hint>Hint</mat-hint> -->
          </mat-form-field>
          <button mat-flat-button type="button" (click)="register(reg.value)">
            Get OTP
          </button>
        </form>
        } @else if(session().length === 0) {
        <form>
          <mat-form-field class="grid place-items-center">
            <mat-label>Enter OTP</mat-label>
            <input matInput type="text" #log />
          </mat-form-field>
          <button mat-flat-button type="button" (click)="login(log.value)">
            Login
          </button>
        </form>
        } @else {
        <li>Hii {{ session().name }}</li>
        }
      </div>
    </main>
  `,
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private navService: NavigationService, private router: Router) {}

  user = signal('');
  session: any = signal([]);

  async register(val: string) {
    // console.log('reg', val);
    const token = await account.createPhoneToken(ID.unique(), val);
    const userId = token.userId;
    this.user.set(userId);
  }

  async login(val: string) {
    // console.log('log', val);
    const session = await account.createSession(this.user(), val);
    this.session.set(session);
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.navService.hide();    
  }

  ngOnDestroy(): void {
    this.navService.display();    
  }
}
