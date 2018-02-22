import { Widget } from '../models/widget.model.client';
import { Injectable } from '@angular/core';

// Injecting service into modules
@Injectable()

export class WidgetService {
  widgets: Widget[] = [
    new Widget('123', 'HEADING', '321', '2', 'GIZMODO'),
    new Widget('234', 'HEADING', '321', '4', 'Lorem ipsum'),
    new Widget('345', 'IMAGE', '321', '1', 'text', 'http://lorempixel.com/400/200/', '100%'),
    new Widget('456', 'HTML', '321', '1', '<p>Lorem ipsum</p>'),
    new Widget('567', 'HEADING', '321', '4', 'Lorem ipsum'),
    new Widget('678', 'YOUTUBE', '321', '1', 'text', 'https://youtu.be/AM2Ivdi9c4E', '100%'),
    new Widget('789', 'HTML', '321', '1', '<p>Lorem ipsum</p>')
  ];

  createWidget(pageId: String, widget: Widget) {
    widget._id = '' + Math.round(Math.random() * 1000);
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }

  findWidgetByPageId(pageId: String) {
    return this.widgets.filter(function (widget) {
      return widget.pageId === pageId;
    });
  }

  findWidgetById(widgetId: String) {
    return this.widgets.find(function (widget) {
      return widget._id === widgetId;
    });
  }

  updateWidget(widgetId, widget) {
    for ( const i in this.widgets ) {
      if ( this.widgets[i]._id === widgetId ) {
        switch (widget.widgetType) {
          case 'HEADER':
            this.widgets[i].text = widget.text;
            this.widgets[i].size = widget.size;
            return true;

          case 'IMAGE':
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;

          case 'YOUTUBE':
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;
        }
      }
    }
    return false;
  }

  deleteWidget(widgetId: String) {
    for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i]._id === widgetId) {
        const j = +i;
        this.widgets.slice(j, 1);
      }
    }
  }
}
