import { Component, OnInit } from "@angular/core";
import { StarWarsService } from "../star-wars.service";

@Component({
  selector: "app-create-character",
  templateUrl: "./create-character.component.html",
  styleUrls: ["./create-character.component.scss"]
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    { display: "None", value: null },
    { display: "Light", value: "light" },
    { display: "Dark", value: "dark" }
  ];
  constructor(private swService: StarWarsService) {}
  defaultName= 'Obi Wan'
  ngOnInit() {}

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm);
    this.swService.addCharacter(
      submittedForm.value.name,
      submittedForm.value.side
    );
  }
}
