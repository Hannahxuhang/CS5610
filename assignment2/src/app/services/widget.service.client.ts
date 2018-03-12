import { Widget } from '../models/widget.model.client';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

// Injecting service into modules
@Injectable()

export class WidgetService {

  constructor(private _http: Http) {}
  baseUrl = environment.baseUrl;

  createWidget(pageId: String, widget: Widget) {
    return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWidgetByPageId(pageId: String) {
    return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
      .map((response: Response) => {
        return response.json();
      });
  }

  findWidgetById(widgetId: String) {
    return this._http.get(this.baseUrl + '/api/widget/' + widgetId)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWidget(widgetId, widget) {
    return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteWidget(widgetId: String) {
    return this._http.delete(this.baseUrl + '/api/widget/' + widgetId)
      .map((response: Response) => {
        return response.json();
      });
  }
}
