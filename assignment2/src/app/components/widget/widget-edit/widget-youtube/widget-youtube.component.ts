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
  pageId: string;
  wgid: string;
  widget: Widget;
  text: string;
  url: string;
  width: string;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.wgid = params['wgid'];
          this.pageId = params['pid'];
          this.widgetService.findWidgetById(this.wgid).subscribe(
            (widget: Widget) => {
              this.widget = widget;
            },
            (error: any) => console.log(error)
          );
      });
  }

  update() {
    this.widget.text = this.widgetForm.value.text;
    this.widget.width = this.widgetForm.value.width;
    this.widget.url = this.widgetForm.value.url;
    this.widget.widgetType = 'Youtube';
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
      }
    )
  }

}
