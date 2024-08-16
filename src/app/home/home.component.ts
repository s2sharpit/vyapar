import { Component } from '@angular/core';
import { OverviewComponent } from '../overview/overview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OverviewComponent],
  template: `
    <main class="grid gap-4">
      <section class="">
        <p class="text-2xl font-bold text-primary">Hi, Tushar</p>
      </section>
      <app-overview />
    </main>
  `,
})
export class HomeComponent {}
