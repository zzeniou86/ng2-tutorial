import { Component, HostBinding, OnInit } from '@angular/core';
import { HeroDetailComponent } from '../hero-detail';
import { Hero, HeroService } from '../shared';

@Component({
  selector: 'my-heroes',
  template: `
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
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  @HostBinding('class')
  class = 'ui container';

  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { };

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }

}
