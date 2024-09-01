import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../services/navigation.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/appwrite/auth.service';

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
          <mat-form-field>
            <mat-label>Enter Mobile Number</mat-label>
            <input matInput value="+91" #reg />
            <mat-icon matSuffix>help_outline</mat-icon>
            <!-- <mat-hint>Hint</mat-hint> -->
          </mat-form-field>
          <button mat-flat-button type="button" (click)="register(reg.value)">
            Get OTP
          </button>
        </form>
        } @else {
        <form>
          <mat-form-field class="grid place-items-center">
            <mat-label>Enter OTP</mat-label>
            <input matInput type="text" #log />
          </mat-form-field>
          <button mat-flat-button type="button" (click)="auth.login(log.value)">
            Login
          </button>
        </form>
        }
      </div>
    </main>
  `,
})
export class LoginComponent implements OnInit, OnDestroy {
  auth: AuthService = inject(AuthService);
  user = signal('');

  constructor(private navService: NavigationService) {}

  async register(phoneId: string) {
    this.user.set(String(await this.auth.register(phoneId)));
  }

  ngOnInit(): void {
    this.navService.hide();
  }

  ngOnDestroy(): void {
    this.navService.display();
  }
}
