import { Injectable } from '@angular/core';
import { Http } from '@angular/http';//#1 to use HttpService


@Injectable()
export class PackageService {

  private topicsUrl: string = 'http://localhost:56214/api/allpackages';
  //private topicsUrlname: string = 'http://localhost:56214/api/locpackages';

  constructor(private _http: Http) { } //#2 to use HttpService

  getAllTopics() {
    return this._http.get(this.topicsUrl); //#3 to use Http Service
  }
  //getTopicsByName() {
  //  return this._http.get(this.topicsUrlname);
  //}

}
