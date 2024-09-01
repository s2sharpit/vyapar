import { Injectable, signal } from '@angular/core';
import { Account, Client, ID, Teams } from 'appwrite';
import { env } from '../../../environments/environment.development';
import { Router } from '@angular/router';

interface TeamInvite {
  teamId: string;
  membershipId: string;
  userId: string;
  secret: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userId = signal('');
  client = new Client();
  account;
  teams;

  constructor(private router: Router) {
    this.client.setEndpoint(env.URL).setProject(env.PROJECT_ID);
    this.account = new Account(this.client);
    this.teams = new Teams(this.client);
  }

  async register(phoneNo: string) {
    try {
      const token = await this.account.createPhoneToken(ID.unique(), phoneNo);
      return this.userId.set(token.userId);
    } catch (err) {
      console.log(err);
    }
    return '';
  }

  async login(otp: string) {
    try {
      if (!this.userId) {
        throw new Error('Error fetching userId.');
      }
      await this.account.createSession(this.userId(), otp);
      return this.router.navigate(['/']);
    } catch (err) {
      console.log(err);
    }
    return;
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      console.log('Appwrite service :: getCurrentUser() :: ', error);
      this.router.navigate(['/login']);
    }
    return;
  }

  async logout(all?: boolean) {
    try {
      if (all) {
        await this.account.deleteSessions();
      } else {
        await this.account.deleteSession('current');
      }
      this.router.navigate(['/login']);
    } catch (error) {
      console.log('Appwrite service :: logout() :: ', error);
    }
  }

  async getUserTeamId() {
    try {
      return await this.teams.list();
    } catch (error) {
      console.log('Appwrite service :: getUserTeamId() :: ', error);
    }
    return;
  }

  async createTeam() {
    try {
      return await this.teams.create(ID.unique(), 'TestTeam');
    } catch (error) {
      console.log('Appwrite service :: createTeam() :: ', error);
    }
    return;
  }

  async createTeamMember() {
    const userTeam = await this.getUserTeamId();
    try {
      return await this.teams.createMembership(
        String(userTeam?.teams[0].$id),
        [],
        // 'tusharpitkapoor@gmail.com',
        undefined,
        undefined,
        '+919050503044',
        'http://localhost:4200/team-invite'
      );
    } catch (error) {
      console.log('Appwrite service :: createTeamMember() :: ', error);
    }
    return;
  }

  async teamInvite({ teamId, membershipId, userId, secret }: TeamInvite) {
    try {
      return await this.teams.updateMembershipStatus(
        teamId,
        membershipId,
        userId,
        secret
      );
    } catch (error) {
      console.log('Appwrite service :: teamInvite() :: ', error);
    }
    return;
  }
}
