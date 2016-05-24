import { Component, Input } from '@angular/core';
import { Hero } from '../shared';

@Component({
  selector: 'my-hero-detail',
  template: `
              <div *ngIf="hero" class="ui compact blue segment">
                <h2>{{hero.name}} details!</h2>
                <p><label class="ui horizontal label">id: </label>{{hero.id}}</p>
                <p><label class="ui horizontal label">name: </label>
                  <input [(ngModel)]="hero.name" placeholder="name" class="ui input">
                </p>
              </div>           
            `
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
