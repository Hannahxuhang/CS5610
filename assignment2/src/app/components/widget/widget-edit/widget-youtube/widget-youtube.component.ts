import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  @ViewChild('f') widgetForm: NgForm;
  pageId: String;
  wgid: String;
  widget: Widget;
  text: String;
  url: String;
  width: String;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.wgid = params['wgid'];
          this.pageId = params['pid'];
        }
      );
    if (this.wgid !== undefined) {
      this.widget = this.widgetService.findWidgetById(this.wgid);
    } else {
      this.widget = new Widget('' + Math.round(Math.random() * 1000), '', '', '', '', '', '');
    }
    this.text = this.widget.text;
    this.url = this.widget.url;
    this.width = this.widget.width;
  }

  updateOrCreate() {
    this.widget.text = this.widgetForm.value.text;
    this.widget.width = this.widgetForm.value.width;
    this.widget.url = this.widgetForm.value.url;
    this.widget.widgetType = 'Youtube';
    if (this.wgid !== undefined) {
      this.widgetService.updateWidget(this.wgid, this.widget);
      this.router.navigate(['../'], {relativeTo: this.activatedRoute});

    } else {
      this.widget = this.widgetService.createWidget(this.pageId, this.widget);
      this.router.navigate(['../../'], {relativeTo: this.activatedRoute});

    }
  }

  delete() {
    if (this.wgid !== undefined) {
      this.widgetService.deleteWidget(this.wgid);
    } else {
      this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
    }
  }

}
