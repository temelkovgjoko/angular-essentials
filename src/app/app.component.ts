import { Component, OnInit } from "@angular/core";
import { StarWarsService } from "./star-wars.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "angular-essentials";
  rootName = "Gjoko";
  onNameChanged(newName) {
    this.rootName = newName;
  }
  constructor(private swService: StarWarsService) {}

  ngOnInit() {
    this.swService.fetchCharacters();
  }
}
