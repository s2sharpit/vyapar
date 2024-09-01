import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListviewComponent } from '../listview/listview.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/appwrite/auth.service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    CommonModule,
    ListviewComponent,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
  ],
  template: `
    <main class="grid gap-6">
      <!-- <h3 class="text-primary text-xl font-medium pb-1 border-b capitalize">Customer Name</h3> -->
      <div
        class="relative p-4 bg-secondary rounded-3xl shadow-md max-w-2xl w-full mx-auto"
      >
        <!-- Customer Information -->
        <div class="float-right">
          <div
            class="h-24 w-24 rounded-full bg-background flex items-center justify-center overflow-hidden"
          >
            @if (image) {
            <img
              src="https://s2sharpit.me/dp"
              alt="Customer Image"
              class="h-full w-full object-cover"
            />
            } @else {
            <span class="material-icons text-9xl text-gray-400"
              >account_circle</span
            >
            }
          </div>
        </div>
        <!-- Name and ID -->
        <div class="text-left mb-2">
          <h3 class="text-2xl font-semibold text-primary">Customer Name {{ paramId }}</h3>
          <p class="text-sm text-gray-500">
            ID: <span class="font-medium">123456</span>
          </p>
        </div>

        <!-- Other Details -->
        <div class="space-y-1 text-left">
          <p class="text-sm text-gray-700">
            Previous Balance: <span class="font-medium">₹100.00</span>
          </p>
          <p class="text-sm text-gray-700">
            Mobile No.: <span class="font-medium">+91-93069-39976</span>
          </p>
          <p class="text-sm text-gray-700">
            Address: <span class="font-medium">123 Main St, City, Country</span>
          </p>
        </div>

        <!-- Status -->
        <div class="mt-4">
          <span
            [ngClass]="
              isactive
                ? 'bg-green-100 text-green-700 border-green-400'
                : 'bg-red-100 text-red-700 border-red-400'
            "
            class="border rounded-full py-1 px-4 text-sm font-semibold"
          >
            {{ isactive ? 'Active' : 'Inactive' }}
          </span>
        </div>

        <!-- Edit Button -->
        <div class="absolute bottom-3 right-3">
          <button mat-mini-fab aria-label="Add new Invoice">
            <mat-icon>edit</mat-icon>
          </button>
        </div>
      </div>

      <app-listview title="customer's invoices" url="invoices" [data]="arr" />

      <div class="fixed bottom-24 right-4">
        <button mat-fab aria-label="Add new Invoice">
          <mat-icon>add</mat-icon>
        </button>
      </div>
    </main>
  `,
})
export class CustomerComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  paramId = Number(this.route.snapshot.params['id']);
  arr = [1, 2, 3, 4, 5, 6, 7, 6, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  isactive = true;
  image = 'val';
  
  
  constructor(private auth: AuthService) {
    // this.test();
  }
  
  
  async test() {
    // console.log(auth.getCurrentUser());
    // console.log(auth.createTeam());
    const val = await this.auth.createTeamMember();
    console.log(val);
    
    // const val = await this.auth.getUserTeamId();
    // console.log(val?.teams[0].$id); 
  }

  

}
