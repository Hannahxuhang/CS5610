import { Website } from '../models/website.model.client';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

// Injecting service into module
@Injectable()

export class WebsiteService {

  constructor(private _http: Http) {}
  baseUrl = environment.baseUrl;


  createWebsite(userId: String, website: Website) {
    return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWebsiteByUser(userId: String) {
    return this._http.get(this.baseUrl + '/api/user/' + userId + '/website')
      .map((response: Response) => {
        return response.json();
      });
  }

  findWebsiteById(websiteId: String) {
    return this._http.get(this.baseUrl + '/api/website/' + websiteId)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWebsite(websiteId: String, website: Website) {
    return this._http.put(this.baseUrl + '/api/website/' + websiteId, website)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteWebsite(websiteId: String) {
    return this._http.delete(this.baseUrl + '/api/website/' + websiteId)
      .map((response: Response) => {
        return response.json();
      });
  }
}
