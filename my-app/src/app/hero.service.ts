import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //getHeroes() : Hero[] {
  //} return HEROES;
  //

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetch heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero[]>{
    this.messageService.add(`HeroService id: fetch ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  constructor(private messageService: MessageService) { }
}
