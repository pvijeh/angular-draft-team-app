import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Player } from './player';
import { PLAYERS } from './mock-players';
import { MessageService } from './message.service';

@Injectable()
export class PlayerService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Player[]> {
    // Todo: send the message _after_ fetching the player
    this.messageService.add('PlayerService: fetched heroes');
    return of(PLAYERS);
  }

  getHero(id: number): Observable<Player> {
    // Todo: send the message _after_ fetching the player
    this.messageService.add(`PlayerService: fetched player id=${id}`);
    return of(PLAYERS.find(player => player.id === id));
  }
}
