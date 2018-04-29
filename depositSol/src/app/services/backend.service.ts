import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }

  doGet(url, header) {
    return this.http.get(url, {
      headers: header
    });
  }
}
