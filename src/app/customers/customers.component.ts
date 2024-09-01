import { Component } from '@angular/core';
import { ListviewComponent } from "../listview/listview.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [ListviewComponent, MatIconModule, MatButtonModule],
  template: `
    <app-listview url="customers" [data]="arr" />
    <div class="fixed bottom-24 right-4">
        <button mat-fab aria-label="Add new Customer">
          <mat-icon>add</mat-icon>
        </button>
      </div>
  `,
})
export class CustomersComponent {
  arr = [1, 2,3,4,5,6,7,6,8,9,8,7,6,5,4,3,2,1];
}
