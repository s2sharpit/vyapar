import { Client, Account} from 'appwrite';
import { environment } from '../environments/environment.development';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(environment.PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
