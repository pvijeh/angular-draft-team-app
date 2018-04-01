import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  players: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.playerService.getHeroes()
    .subscribe(players => this.players = players);
  }
}
