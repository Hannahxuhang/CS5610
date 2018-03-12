import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  @ViewChild('f') pageForm: NgForm;
  websiteId: string;
  name: string;
  title: string;
  userId: string;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  createPage() {
    const page = new Page('' + Math.round(Math.random() * 1000), '', this.websiteId, '');
    page.name = this.pageForm.value.name;
    page.title = this.pageForm.value.title;
    this.pageService.createPage(this.websiteId, page).subscribe(
      (data: any) => {
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
      },
      (error: any) => console.log(error)
    );

    alert('New page ' + page.name + ' has been created!');
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
        }
      );
  }

}
