import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  template: `
    <section class="">
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      @for (item of overviewList; track $index) {
        <div class="bg-secondary py-1 px-4 rounded-2xl">
          <small class="font-semibold">{{ item.name }}</small>
          <h2 class="text-2xl font-bold px-2 py-3 text-primary">{{ item.val }}</h2>
        </div>
      }
      </div>
    </section>
  `,
})
export class OverviewComponent {
  protected overviewList = [
    {
        name: "Total Invoices",
        val: "44"
    },
    {
        name: "Customers",
        val: "55"
    },
    {
        name: "Pending Balances",
        val: "40000"
    },
    {
      name: "Month Revenue",
      val: '44'
    }
]
}
