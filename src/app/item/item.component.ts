import { Component, Input, OnInit } from '@angular/core';

import { StarWarsService } from '../star-wars.service';

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit {
  @Input() character;

  constructor(private swService: StarWarsService) {}

  ngOnInit() {}

  onAssign(side) {
    //this.character.side = side;
    //this.sideAssigned.emit({ name: this.character.name, side: side });

    this.swService.onSideChosen({ name: this.character.name, side: side });
  }
}
