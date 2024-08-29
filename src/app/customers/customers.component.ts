import { Component } from '@angular/core';
import { ListviewComponent } from "../listview/listview.component";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [ListviewComponent],
  template: `
    <app-listview [data]="arr" />
  `,
})
export class CustomersComponent {
  arr = [1, 2,3,4,5,6,7,6,8,9,8,7,6,5,4,3,2,1];
}
