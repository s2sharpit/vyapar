import { Client, Account} from 'appwrite';
import { environment } from '../environments/environment';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(environment.projectId); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
