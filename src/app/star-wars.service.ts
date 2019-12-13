import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { LogService } from "./log.service";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
@Injectable()
export class StarWarsService {
  private characters = [
    { name: "Luke Skywalker", side: null },
    { name: "Darth Vader", side: null }
  ];
  charactersChanged = new Subject<void>();

  constructor(private logService: LogService, private http: HttpClient) {}

  getCharacters(chosenList) {
    if (chosenList === "all") {
      return this.characters.slice();
    }
    return this.characters.filter(char => {
      return char.side === chosenList;
    });
  }

  fetchCharacters() {
    this.http
      .get("https://swapi.co/api/people/")
      .pipe(
        map(response => {
          const extractedChars = response["results"];
          const chars = extractedChars.map(char => {
            return { name: char.name, side: "" };
          });
          return chars;
        })
      )
      .subscribe(data => {
        console.log(data);
        this.characters = data;
        this.charactersChanged.next();
      });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex(char => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
    this.logService.writeLog(
      `Changed side of ${charInfo.name} new side: ${charInfo.side} `
    );
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex(char => {
      return char.name === name;
    });
    if (pos !== -1) {
      return;
    }
    const newChar = { name: name, side: side };
    this.characters.push(newChar);
  }
}
