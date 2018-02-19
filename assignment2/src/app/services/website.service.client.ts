import { Website } from '../models/website.model.client';
import { Injectable } from '@angular/core';

// Injecting service into module
@Injectable()

export class WebsiteService {
  websites: Website[] = [
    new Website('123', 'Facebook', '456', 'Lorem'),
    new Website('234', 'Tweeter', '456', 'Lorem'),
    new Website('456', 'Gizmodo', '456', 'Lorem'),
    new Website('890', 'Go', '123', 'Lorem'),
    new Website('567', 'Tic Tac Toe', '123', 'Lorem'),
    new Website('678', 'Checkers', '123', 'Lorem'),
    new Website('789', 'Chess', '234', 'Lorem')
  ];

  createWebsite(userId: String, website: Website) {
    const new_website = {
      _id: (website._id),
      name: website.name,
      developerId: userId,
      description: website.description
    };

    this.websites.push(new_website);
  }

  findWebsiteByUser(userId: String) {
    return this.websites.filter(function (website) {
      return website.developerId === userId;
    });
  }

  findWebsiteById(websiteId: String) {
    return this.websites.find(function (website) {
      return website._id === websiteId;
    });
  }

  updateWebsite(websiteId: String, website: Website) {
    for (let i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteId) {
        this.websites[i].name = website.name;
        this.websites[i].developerId = website.developerId;
        this.websites[i].description = website.description;
      }
    }
  }

  deleteWebsite(websiteId: String) {
    for (let i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteId) {
        // Make sure j is a number
        const j = +i;
        this.websites.slice(j, 1);
      }
    }
  }
}
