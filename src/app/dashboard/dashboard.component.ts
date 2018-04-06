import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { PlayerService } from '../player.service';

import { Team } from '../team';
import { TeamService } from '../team.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  teams: Team[];

  constructor(
    private teamService: TeamService,
    private router: Router,
   ) { }

  ngOnInit() {
    this.getTeams();
    this.checkAllTeamsPicked();
  }

  getTeams(): void {
    this.teamService.getTeams()
    .subscribe(teams => this.teams = teams);
  }

  checkAllTeamsPicked(): void {
    let count = 0;

    this.teams.forEach( team => {
      if( team.player !== null ) {
        count++;
      }
    })

    if(count !== this.teams.length) {
      this.router.navigateByUrl('/players');
    }
  }
}
