import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <main class="min-h-screen bg-background text-muted-foreground">
    <main class="w-11/12 mx-auto py-4">
      <router-outlet />
    </main>
  </main>
  `,
  styles: [],
})

export class AppComponent {
  title = 'vyapar';
}
