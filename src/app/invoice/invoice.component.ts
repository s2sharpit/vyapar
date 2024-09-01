import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
  template: `
    <p>
      invoice works! {{paramId}}
    </p>
  `,
  styles: ``
})
export class InvoiceComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  paramId = Number(this.route.snapshot.params['id']);
  
}
