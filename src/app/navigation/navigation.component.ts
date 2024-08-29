import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (navService.showNav()) {
      <nav
      class="fixed md:hidden bottom-4 left-0 right-0 text-muted-foreground mx-auto w-11/12 min-w-fit justify-evenly bg-secondary/50 backdrop-blur-md border-border border px-4 py-2 rounded-xl flex items-center gap-5 z-9"
      >
      @for (item of navList; track $index) {
      <a
        [routerLink]="[item.name === 'dashboard' ? '/' : item.name]"
        class="flex-1 capitalize text-center grid place-items-center"
      >
        <mat-icon
          aria-hidden="false"
          aria-label="Example icon"
          [fontIcon]="item.icon"
        ></mat-icon>
        <span class="">
          {{ item.name }}
        </span>
      </a>
      }
    </nav>
    }
  `,
})
export class NavigationComponent {
  constructor(public navService: NavigationService) {}
  
  protected navList = [
    {
      name: 'dashboard',
      icon: 'home_filled',
    },
    {
      name: 'customers',
      icon: 'supervised_user_circle',
    },
    {
      name: 'invoices',
      icon: 'currency_rupee',
    },
    {
      name: 'user',
      icon: 'account_circle',
    },
  ];

}
