import { Page } from '../models/page.model.client';
import { Injectable } from '@angular/core';

// Injecting service into modules
@Injectable()

export class PageService {
  pages: Page[] = [
    new Page('321', 'Post 1', '456', 'Lorem'),
    new Page('432', 'Post 2', '456', 'Lorem'),
    new Page('543', 'Post 3', '456', 'Lorem')
  ];

  createPage(websiteId: String, page: Page) {
    const new_page = {
      _id: page._id,
      name: page.name,
      websiteId: websiteId,
      title: page.title
    };

    this.pages.push(new_page);
  }

  findPageByWebsiteId(websiteId: String) {
    return this.pages.filter(function (page) {
      return page.websiteId === websiteId;
    });
  }

  findPageById(pageId: String) {
    return this.pages.find(function (page) {
      return page._id === pageId;
    });
  }

  updatePage(pageId: String, page: Page) {
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i]._id === pageId) {
        this.pages[i].name = page.name;
        this.pages[i].websiteId = page.websiteId;
        this.pages[i].title = page.title;
      }
    }
  }

  deletePage(pageId: String) {
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i]._id === pageId) {
        const j = +i;
        this.pages.slice(j, 1);
      }
    }
  }
}
