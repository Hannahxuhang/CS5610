import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Website} from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  @ViewChild('f') websiteForm: NgForm;
  websiteId: String;
  website: Website;
  name: String;
  description: String;
  userId: String;
  websites = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.userId = params['uid'];
        }
      );
    this.websites = this.websiteService.findWebsiteByUser(this.userId);
    this.website = this.websiteService.findWebsiteById(this.websiteId);
    this.name = this.website.name;
    this.description = this.website.description;
  }

  update() {
    this.website.name = this.websiteForm.value.name;
    this.website.description = this.websiteForm.value.description;
    this.websiteService.updateWebsite(this.websiteId, this.website);
  }

  delete() {
    this.websiteService.deleteWebsite(this.websiteId);
  }
}
