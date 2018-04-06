import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Player }         from '../player';
import { PlayerService }  from '../player.service';

import { Team }         from '../team';
import { TeamService }  from '../team.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  players: Player[];
  teams: Team[];
  @Input() player: Player;
 
  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private teamService: TeamService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPlayers();
    this.getPlayer();
    this.getTeams();
  }

  getPlayer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.playerService.getPlayer(id)
      .subscribe(player => this.player = player);
  }

  handleChange(event, team, player) {

    for (let i = 0; i < this.players.length; i++) {

      if( this.players[i].team && this.players[i].team === team.name ) {
        this.players[i].team = '';
      }

      if(this.players[i].id === player.id) {
        this.players[i].team = team.name;
      }
    }

    for (let i = 0; i < this.teams.length; i++) {

      if( this.teams[i].id === player.id ) {
        this.teams[i].player = null;
      }

      if( this.teams[i].id === team.id ) {
        this.teams[i].player = player
      }
    }
  }

  getPlayers(): void {
    this.playerService.getPlayers()
    .subscribe(players => this.players = players);
  }

  getTeams(): void {
    this.teamService.getTeams()
    .subscribe(teams => this.teams = teams);
  }

  goBack(): void {
    this.location.back();
  }
}
