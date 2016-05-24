import { Component } from '@angular/core';

export /**
 * Hero
 */
class Hero {
  id: number;
  name: string;
}

@Component({
  moduleId: module.id,
  selector: 'angular2-heroes-app',
  host: {
    class: 'ui container'
  },
  template: `
              <h3 class="ui dividing header">{{title}}</h3>
              <h2>{{hero.name}} details!</h2>
              <p><label class="ui horizontal label">id: </label>{{hero.id}}</p>
              <p><label class="ui horizontal label">name: </label><input [(ngModel)]="hero.name" placeholder="name" class="ui input"></p>
            `
  // templateUrl: 'angular2-heroes.component.html',
  // styleUrls: ['angular2-heroes.component.css']
})
export class Angular2HeroesAppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
}
