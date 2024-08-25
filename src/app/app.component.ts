import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { account } from '../lib/appwrite';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  template: `
    <main class="min-h-screen bg-background text-muted-foreground antialiased w-11/12 mx-auto py-4">
      <router-outlet />
      <app-navigation />
    </main>
  `,
})

export class AppComponent {
  title = 'vyapar';

  constructor(private router:Router) {}

  // async ngOnInit() {
  //   try {
  //     await account.get();
  //   } catch(err) {
  //     this.router.navigate(['/login']);
  //   }
  // }
}
