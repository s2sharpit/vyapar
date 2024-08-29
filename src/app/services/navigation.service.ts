import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  showNav = signal(true);

  hide() {
    this.showNav.set(false);
  }

  display() {
    this.showNav.set(true);
  }
}
