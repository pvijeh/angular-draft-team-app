import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Player } from './player';
import { PLAYERS } from './mock-players';

@Injectable()
export class PlayerService {

  getPlayers(): Observable<Player[]> {
    return of(PLAYERS);
  }

  getPlayer(id: number): Observable<Player> {
    return of(PLAYERS.find(player => player.id === id));
  }
}
