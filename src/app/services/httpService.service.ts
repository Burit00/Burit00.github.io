import { Attraction } from './../models/attraction';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
link= "https://628e9975368687f3e71982d1.mockapi.io/monuments";
constructor(private http: HttpClient) {
}

getAttracts():Observable<Array<Attraction>>{
  return this.http.get<Array<Attraction>>(this.link);
}
}
