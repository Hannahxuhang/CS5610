import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Website} from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  @ViewChild('f') websiteForm: NgForm;
  websiteId: string;
  website: Website;
  name: string;
  description: string;
  userId: string;
  websites = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.userId = params['uid'];

          this.websiteService.findWebsiteById(this.websiteId).subscribe(
            (data: Website) => {
              this.website = data;
              this.name = data.name;
              this.description = data.description;
            },
            (error: any) => console.log(error)
          );

          this.websiteService.findWebsiteByUser(this.userId).subscribe(
            (data: Website[]) => {
              this.websites = data;
            },
            (error: any) => console.log(error)
          );
        }
      );
  }

  update() {
    this.website.name = this.websiteForm.value.name;
    this.website.description = this.websiteForm.value.description;
    this.websiteService.updateWebsite(this.websiteId, this.website).subscribe(
      (website: Website) => {
        this.website = website;
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
      },
      (error: any) => console.log(error)
    );
  }

  delete() {
    this.websiteService.deleteWebsite(this.websiteId).subscribe(
      () => {
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
      },
      (error: any) => console.log(error)
    );

    alert('website ' + this.name + ' has been deleted!');
  }
}
