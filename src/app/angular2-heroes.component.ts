import { Component, HostBinding, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail';
import { HeroService } from './shared';

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
              <my-hero-detail [hero]="selectedHero"></my-hero-detail>
            `,
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class Angular2HeroesAppComponent implements OnInit {
  @HostBinding('class')
  appClass = 'ui container';
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  constructor(private heroService: HeroService) { }
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }

  ngOnInit() {
    this.getHeroes();
  } 
}
