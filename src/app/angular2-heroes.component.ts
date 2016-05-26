import { Component, HostBinding, OnInit } from '@angular/core';
import { HeroesComponent } from './heroes';
import { DashboardComponent } from './dashboard';
import { HeroDetailComponent } from './hero-detail';
import { HeroService } from './shared';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }

])

@Component({
  selector: 'angular2-heroes-app',
  template: `
              <h3 class="ui dividing header">{{title}}</h3>
              <div class="ui secondary  menu">
                <a [routerLink]="['Dashboard']" class="item active">
                  Dashboard
                </a>
                <a [routerLink]="['Heroes']" class="item">
                  Heroes
                </a>
              </div>
              <router-outlet></router-outlet>
            `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService]
})
export class Angular2HeroesAppComponent implements OnInit {
  @HostBinding('class')
  class = 'ui container';
  title = 'Tour of Heroes';

  constructor(private heroService: HeroService) { };
  ngOnInit() { };
}
