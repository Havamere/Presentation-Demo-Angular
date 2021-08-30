import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class FactService {
  //service api URL
  apiURL = 'https://uselessfacts.jsph.pl/';

  constructor(private http: HttpClient) {}

  //optional filters
  //language english(en) or deutsch/german(de)
  lang = 'en';
  //format random vs. today
  format = 'random';
  //extentions available - json, html, txt, and md - default is html
  ext = 'json';

  getFact() {
    return this.http
          .get<any[]>(`${this.apiURL}${this.format}.${this.ext}?language=${this.lang}`)
          .pipe(map(data => {
            let newFact = [];
            // console.dir(data);
            newFact.push(data);
            return newFact;
          }));
  }

}
