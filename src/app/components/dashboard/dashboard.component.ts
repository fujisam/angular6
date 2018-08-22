import { Component, OnInit } from "@angular/core";
import { RegisterData } from "../../register-data";
import { HeroService } from "../../services/hero.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: []
})
export class DashboardComponent implements OnInit {
  heroes: RegisterData[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => (this.heroes = heroes.slice(1, 5)));
  }
}
