import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/appwrite/auth.service';

type Obj = Record<string, string>;

interface TeamInvite {
  teamId: string;
  membershipId: string;
  userId: string;
  secret: string;
}

@Component({
  selector: 'app-team-invite',
  standalone: true,
  template: `<p>team-invite works!</p>`,
  styles: ``,
})
export class TeamInviteComponent {
  constructor(private route: ActivatedRoute, private auth: AuthService) {
    const cleanedObject = this.cleanObjectKeys(this.route.snapshot.queryParams);
    if (this.isTeamInvite(cleanedObject)) {
      this.auth.teamInvite(cleanedObject);
    } else {
      console.error('Invalid TeamInvite object:', cleanedObject);
    }
  }

  private cleanObjectKeys(obj: Obj): Partial<TeamInvite> {
    // Remove 'amp;' prefix from keys and return the cleaned object
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key.replace(/^amp;/, ''), value])
    );
  }

  private isTeamInvite(obj: Partial<TeamInvite>): obj is TeamInvite {
    // Check if all required keys are present in the object
    return ['teamId', 'membershipId', 'userId', 'secret'].every(key => key in obj);
  }
}
