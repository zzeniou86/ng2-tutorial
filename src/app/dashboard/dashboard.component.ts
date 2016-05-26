import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from '../shared';
import { Router } from '@angular/router-deprecated';


@Component({
  selector: 'dashboard',
  template: `
            <h3>Top Heroes</h3>
            <div class="ui stackable four column grid">
              <a *ngFor="let hero of heroes" (click)="goToDetail(hero)" class="column">
                <div class="ui segment">
                  {{hero.name}}
                </div>
              </a>
            </div>
            `
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private router: Router, private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }

  goToDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this.router.navigate(link);
  }

}
