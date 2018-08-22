import { Component, OnInit } from "@angular/core";

import { RegisterData } from "../../register-data";
import { HeroService } from "../..//services/hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: []
})
export class HeroesComponent implements OnInit {
  heroes: RegisterData[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as RegisterData).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: RegisterData): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
