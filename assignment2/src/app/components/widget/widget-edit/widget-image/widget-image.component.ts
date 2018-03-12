import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  @ViewChild('f') widgetForm: NgForm;
  pageId: string;
  userId: string;
  websiteId: string;
  wgid: string;
  widget: Widget;
  text: string;
  url: string;
  width: string;
  baseUrl = environment.baseUrl;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.widget = new Widget('', '', '');
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.wgid = params['wgid'];
          this.pageId = params['pid'];
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.widgetService.findWidgetById(this.wgid).subscribe(
            (widget: Widget) => {
              this.widget = widget;
            },
            (error: any) => console.log(error)
          );
        }
      );
  }

  update() {
    this.widget.text = this.widgetForm.value.text;
    this.widget.width = this.widgetForm.value.width;
    this.widget.url = this.widgetForm.value.url;
    this.widget.widgetType = 'Image';
    this.widgetService.updateWidget(this.wgid, this.widget).subscribe(
      (widget: Widget) => {
        this.widget = widget;
        this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
      },
      (error: any) => console.log(error)
    );
  }

  delete() {
    this.widgetService.deleteWidget(this.wgid).subscribe(
      () => {
        this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
      },
      (error: any) => console.log(error)
    );
  }

}
