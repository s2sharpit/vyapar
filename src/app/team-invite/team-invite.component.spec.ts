import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInviteComponent } from './team-invite.component';

describe('TeamInviteComponent', () => {
  let component: TeamInviteComponent;
  let fixture: ComponentFixture<TeamInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamInviteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
