import { Component, HostBinding } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'angular2-heroes-app',
  template: `
              <h3 class="ui dividing header">{{title}}</h3>
              <h2>My Heroes</h2>
              <div class="ui relaxed list">
                <div class="item" *ngFor="let hero of heroes"
                (click)="onSelect(hero)">
                  <div class="header">
                    <a class="ui orange image label"
                      [class.blue]="hero === selectedHero">
                      {{hero.id}}
                      <div class="detail">{{hero.name}}</div>
                    </a>
                </div>
              </div>
              <div *ngIf="selectedHero" class="ui compact blue segment">
                <h2>{{selectedHero.name}} details!</h2>
                <p><label class="ui horizontal label">id: </label>{{selectedHero.id}}</p>
                <p><label class="ui horizontal label">name: </label>
                  <input [(ngModel)]="selectedHero.name" placeholder="name" class="ui input">
                </p>
              </div>
            `
})
export class Angular2HeroesAppComponent {
  @HostBinding('class') appClass = 'ui container';
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes = HEROES;
  onSelect(hero: Hero) { this.selectedHero = hero; }
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];
