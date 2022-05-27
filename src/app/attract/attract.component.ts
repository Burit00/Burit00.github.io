import { HttpServiceService } from './../services/httpService.service';
import { FavService, SortCat } from './../services/fav.service';
import { Component, OnInit } from '@angular/core';
import { Attraction } from '../models/attraction';

@Component({
  selector: 'app-attract',
  templateUrl: './attract.component.html',
  styleUrls: ['./attract.component.css']
})
export class AttractComponent {

  public listOfAttraction: Attraction[] = [];
  public sortCategory: Array<SortCat> = [{category: '', favorite: 'mixed'}];

  constructor(private favService: FavService,private httpServiceService: HttpServiceService) {
    this.httpServiceService.getAttracts().subscribe( (value) => {
      this.listOfAttraction = value;
    });
    this.favService.getSortCat().subscribe( (value: Array<SortCat>) =>{
      this.sortCategory = value;
    });
  }

}
