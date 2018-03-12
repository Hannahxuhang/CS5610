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
  pageId: string;
  wgid: string;
  widget: Widget;
  text: string;
  size: string;

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
        }
      );
  }

  update() {
    this.widget.text = this.widgetForm.value.text;
    this.widget.size = this.widgetForm.value.size;
    this.widget.widgetType = 'Heading';
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
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
      },
      (error: any) => console.log(error)
    );
  }

}
