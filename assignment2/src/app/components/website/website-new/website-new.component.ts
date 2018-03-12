import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('f') websiteForm: NgForm;
  websiteId: string;
  name: string;
  description: string;
  userId: string;
  websites = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteService.findWebsiteByUser(this.userId).subscribe(
            (data: Website[]) => {
              this.websites = data;
            },
            (error: any) => console.log(error)
          );
        }
      );
  }

  createWebsite() {
    const website = new Website('', '', '', '');
    website.name = this.websiteForm.value.name;
    website.description = this.websiteForm.value.description;
    website.developerId = this.userId;
    this.websiteService.createWebsite(this.userId, website).subscribe(
      (data: any) => {
        this.router.navigate(['/user/' + this.userId + '/website']);
      }
    )

    alert('Website created successfully!');
  }

}
