import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  widgetId: string;
  pageId: string;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pid'];
        }
      );
  }

  createWidget(widgetType: string) {
    const wid = '' + Math.round(Math.random() * 1000);
    let widget = new Widget(wid, widgetType, this.pageId);

    this.widgetService.createWidget(this.pageId, widget).subscribe(
      (data: Widget) => {
        widget = data;
        this.router.navigate(['../', widget._id], { relativeTo: this.activatedRoute });
      },
      (error: any) => console.log(error)
    );
  }
}
