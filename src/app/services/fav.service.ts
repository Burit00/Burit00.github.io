import { HttpServiceService } from './httpService.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Attraction } from '../models/attraction';

@Injectable({
  providedIn: 'root'
})
export class FavService {

private sortCat : Array<SortCat> = [{category: '', favorite: 'mixed'}];
private ObsSortCat = new BehaviorSubject<Array<SortCat>>(this.sortCat);


constructor() {}

setCategory(value: string){
  this.sortCat[0].category = value;
  this.ObsSortCat.next(this.sortCat);
}

setFavorite(value: string){
  this.sortCat[0].favorite = value;
  this.ObsSortCat.next(this.sortCat);
}

getSortCat(): Observable<Array<SortCat>>{
  return this.ObsSortCat.asObservable();
}


}

export interface SortCat{
  category: string ;
  favorite: string ;
}
