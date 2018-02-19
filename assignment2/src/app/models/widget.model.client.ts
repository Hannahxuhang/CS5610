export class Widget {
  _id: String;
  widgetType: String;
  pageId: String;
  size: String;
  text: String;
  url: String;
  width: String;

  constructor(_id: String, widgetType: String, pageId: String, size = '1', text = 'text', url = 'url', width = '100%') {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.url = url;
    this.width = width;
  }
}
