import { Component, OnInit } from '@angular/core';

import { StarWarsService } from '../star-wars.service';

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit {
  characters = [];
  chosenList = "all";
  constructor(private swService: StarWarsService) {}

  ngOnInit() {}

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {
    this.characters = this.swService.getCharacters(this.chosenList);
    return this.characters;
  }
}
