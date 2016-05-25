import { Component, HostBinding, OnInit } from '@angular/core';
import { HeroesComponent } from './heroes';
import { HeroService } from './shared';


@Component({
  selector: 'angular2-heroes-app',
  template: `
              <h3 class="ui dividing header">{{title}}</h3>
              <my-heroes></my-heroes>
            `,
  directives: [HeroesComponent],
  providers: [HeroService]
})
export class Angular2HeroesAppComponent implements OnInit {
  @HostBinding('class')
  class = 'ui container';
  title = 'Tour of Heroes';

  constructor(private heroService: HeroService) { };
  ngOnInit() { };
}
