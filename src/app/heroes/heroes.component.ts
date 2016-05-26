import { Component, HostBinding, OnInit } from '@angular/core';
import { Hero, HeroService }              from '../shared';
import { Router }                         from '@angular/router-deprecated';
import { HeroDetailComponent }            from '../hero-detail';
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
                    <button (click)="delete(hero, $event)">Delete</button>
                </div>
              </div>
              
              <button (click)="addHero()"> Add New Hero </button>
              <div *ngIf="addingHero">
                <my-hero-detail (close)="close($event)"></my-hero-detail>
              </div>
              
              <div *ngIf="selectedHero">
                <h2>
                  {{selectedHero.name | uppercase}} is my hero
                </h2>
                <button (click)="gotoDetail()" class="ui blue button">View Details</button>
              </div>
            `,
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  @HostBinding('class') class = 'ui container';

  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;

  constructor(
    private router: Router,
    private heroService: HeroService
    ) { };

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes)
        .catch(error => this.error = error); // TODO: Display error message  
  }

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  delete(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService
        .delete(hero)
        .then(res => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

}
