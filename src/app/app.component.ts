import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthService } from './services/appwrite/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  template: `
    <main class="min-h-screen bg-background text-muted-foreground antialiased w-11/12 mx-auto py-4 max-md:pb-40">
      <router-outlet />
      <app-navigation />
    </main>
  `,
})

export class AppComponent {
  title = 'vyapar';
  auth: AuthService = inject(AuthService);

  // async ngOnInit() {
  //   this.auth.getCurrentUser();
  // }
}
