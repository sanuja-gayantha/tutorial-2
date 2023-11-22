import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes:Hero[] = HEROES;

  selectedHero?: Hero;
  
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
