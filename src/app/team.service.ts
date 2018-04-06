import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Team } from './team';
import { TEAMS } from './mock-teams';

console.log('teams', TEAMS);

@Injectable()
export class TeamService {

  getTeams(): Observable<Team[]> {
    console.log('teams', TEAMS);

    return of(TEAMS);
  }

  getTeam(id: number): Observable<Team> {
    return of(TEAMS.find(team => team.id === id));
  }
}
