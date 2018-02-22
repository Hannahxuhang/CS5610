import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  @ViewChild('f') widgetForm: NgForm;
  pageId: String;
  wgid: String;
  widget: Widget;
  text: String;
  size: String;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.wgid = params['wgid'];
          this.pageId = params['pid'];
        }
      );
    if (this.wgid !== undefined && this.wgid !== '') {
      this.widget = this.widgetService.findWidgetById(this.wgid);
    } else {
      this.widget = new Widget('' + Math.round(Math.random() * 1000), '', '', '', '', '', '');
    }
    this.text = this.widget.text;
    this.size = this.widget.size;
  }

  updateOrCreate() {
    this.widget.text = this.widgetForm.value.text;
    this.widget.size = this.widgetForm.value.size;
    this.widget.widgetType = 'Heading';
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
