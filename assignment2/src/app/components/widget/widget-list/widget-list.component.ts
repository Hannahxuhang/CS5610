import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  widgets = [];
  pageId: String;

  constructor(private domSanitizer: DomSanitizer, private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  getUrl(url: String) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url.toString());
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pid'];
        }
      );
    this.widgets = this.widgetService.findWidgetByPageId(this.pageId);
  }

}
