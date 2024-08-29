import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listview',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <main class="grid gap-4">
      <h3 class="text-primary text-xl font-medium pb-1 border-b capitalize">{{ title ?? headerVal }}</h3>
      <form class="flex bg-secondary rounded-full overflow-hidden px-4 items-center gap-2 shadow-md">
        <input type="text" class="w-full outline-none bg-transparent py-2" />
        <button class="primary grid place-items-center h-full" type="button" click="filterResults(filter.value)"><mat-icon class=""
          aria-hidden="false"
          aria-label="Example icon"
          fontIcon="search"
        ></mat-icon></button>
      </form>
      <section class="bg-secondary divide-y-2 divide-background rounded-2xl shadow-md">
        @for (item of data; track $index) {
          <a class="flex gap-4 py-2 px-4 items-center">
            <div class="h-9 w-9 bg-background rounded-full"></div>
            <div class="grid ">
              <h6 class="text-primary">Cutomer name</h6>
              <small class="">9876543210</small>
            </div>
          </a>
        }
      </section>
    </main>
  `,
})
export class ListviewComponent {
  @Input() title?: string;
  @Input() data: any;
  headerVal = ''
  constructor(private route: ActivatedRoute) {
    this.headerVal = this.route.snapshot.url.map((segment) => segment.path).join('/'); 
  }

}
