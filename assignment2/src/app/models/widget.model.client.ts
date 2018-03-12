export class Widget {
  _id: string;
  widgetType: string;
  pageId: string;
  size: string;
  text: string;
  url: string;
  width: string;

  constructor(_id: string, widgetType: string, pageId: string, size = '1', text = 'text', url = 'url', width = '100%') {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.url = url;
    this.width = width;
  }
}
