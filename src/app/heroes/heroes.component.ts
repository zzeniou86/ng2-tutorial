import { Component, HostBinding, OnInit } from '@angular/core';
import { Hero, HeroService } from '../shared';
import { Router } from '@angular/router-deprecated';

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
              
              <div *ngIf="selectedHero">
                <h2>
                  {{selectedHero.name | uppercase}} is my hero
                </h2>
                <button (click)="goToDetail()" class="ui blue button">View Details</button>
              </div>
            `
})
export class HeroesComponent implements OnInit {
  @HostBinding('class')
  class = 'ui container';

  selectedHero: Hero;
  heroes: Hero[];

  constructor(private router: Router, private heroService: HeroService) { };

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  goToDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
