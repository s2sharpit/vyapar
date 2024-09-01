import { inject, Injectable } from '@angular/core';
import { Client, Databases, ID, Permission, Query, Role, Storage } from 'appwrite';
import { env } from '../../../environments/environment.development';
import { AuthService } from './auth.service';

interface Customer {
  id?: string;
  name: string;
  phone?: string;
  address?: string;
  balance: number;
  avator?: string;
  email?: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DbService {
  auth: AuthService = inject(AuthService);
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(env.URL).setProject(env.PROJECT_ID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  permissions(teamId: string) {
    return [
      Permission.read(Role.team(teamId)),   // Only users of team can read the document
      Permission.update(Role.team(teamId)), // Only users of team can update the document
      Permission.delete(Role.team(teamId))  // Only users of team can delete the document
  ]
  }

  async getCustomers(queries = [Query.equal('status', 'active')]) {
    try {
      return await this.databases.listDocuments(
        env.DATABASE_ID,
        env.CUSTOMERS_COLLECTION_ID,
        queries
      );
    } catch (err) {
      console.log('Appwrite service :: getPosts() :: ', err);
      return false;
    }
  }

  // async createCustomer({ name, phone, address, balance, avator }: Customer) {
  //   try {
  //     return await this.databases.createDocument(
  //       env.DATABASE_ID,
  //       env.CUSTOMERS_COLLECTION_ID,
  //       ID.unique(),
  //       {
  //         name,
  //         phone,
  //         address,
  //         balance,
  //         avator,
  //       },
  //       this.permissions(teamId)
  //     );
  //   } catch (error) {
  //     console.log('Appwrite service :: createPost() :: ', error);
  //     return false;
  //   }
  // }
}
