import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { PlayerService } from '../player.service';

import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  players: Player[];
  teams: Team[];
  viewRoster: boolean;

  constructor(
    private playerService: PlayerService,
    private teamService: TeamService
   ) { }

  ngOnInit() {
    this.getPlayers();
    this.getTeams();
    this.checkAllTeamsPicked();
  }

  getPlayers(): void {
    this.playerService.getPlayers()
    .subscribe(players => this.players = players);
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

    if(count === this.teams.length) {
      this.viewRoster = true;
    }
  }
}
