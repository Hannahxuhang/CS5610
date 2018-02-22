export class Page {
  _id: String;
  name: String;
  websiteId: String;
  title: String;

  constructor(_id: String, name: String, websiteId: String, title: String) {
    this._id = _id;
    this.name = name;
    this.websiteId = websiteId;
    this.title = title;
  }
}