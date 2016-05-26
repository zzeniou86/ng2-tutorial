import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from '../shared';
import { RouteParams } from '@angular/router-deprecated';

@Component({
  selector: 'my-hero-detail',
  template: `
              <div *ngIf="hero" class="ui compact blue segment">
                <h2>{{hero.name}} details!</h2>
                <p><label class="ui horizontal label">id: </label>{{hero.id}}</p>
                <p><label class="ui horizontal label">name: </label>
                  <input [(ngModel)]="hero.name" placeholder="name" class="ui input">
                </p>
                <button (click)="goBack()" class="ui button">Back</button>
              </div>        
            `
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(private heroService: HeroService, private routeParams: RouteParams ) { }

  goBack() {
    window.history.back();
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

}
