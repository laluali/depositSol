import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {appHeaders, userLogin} from '../constants/global.constant';
import {CommonService} from './common.service';


@Injectable()
export class BackendService {

  constructor(private http: HttpClient, private commonService: CommonService) { }

  doGet(url, params?: string) {
    return this.http.get(url, {
      params: {
        'q': params ? params : null
      },
      headers: new HttpHeaders({
        'Content-Type':  appHeaders.ContentTypeJSON,
        'Authorization':  appHeaders.Authorization + this.commonService.getBase64(userLogin())
      })
    });
  }

  doPut(url, body?) {
    return this.http.put(url, body ? body : '' , {
      headers: new HttpHeaders({
        'Content-Type':  appHeaders.ContentTypeJSON,
        'Authorization':  appHeaders.Authorization + this.commonService.getBase64(userLogin())
      })
    });
  }

  doDelete(url) {
    return this.http.delete(url, {
      headers: new HttpHeaders({
        'Content-Type':  appHeaders.ContentTypeJSON,
        'Authorization':  appHeaders.Authorization + this.commonService.getBase64(userLogin())
      })
    });
  }
}
