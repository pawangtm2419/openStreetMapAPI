import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(public http: HttpClient) { }

  getLocationInfo(appURL) {
    return this.http.get(appURL);
  }
}
