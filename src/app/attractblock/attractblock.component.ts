import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-attractblock',
  templateUrl: './attractblock.component.html',
  styleUrls: ['./attractblock.component.css']
})
export class AttractblockComponent {
  @Input()
  public name!: string;

  @Input()
  public country!: string;

  @Input()
  public image!: string;

  @Input()
  public yearOfBuild!: number;

  @Input()
  public favorite!: boolean;

  favOrNot() {
    if (this.favorite === true) {
      this.favorite = false;
    } else {
      this.favorite = true;
    }
  }

}
