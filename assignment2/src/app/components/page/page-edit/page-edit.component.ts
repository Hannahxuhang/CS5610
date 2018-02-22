import { Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {NgForm} from '@angular/forms';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  @ViewChild('f') pageForm: NgForm;
  userId: String;
  websiteId: String;
  pageId: String;
  name: String;
  page: Page;
  title: String;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  update() {
    this.page.name = this.pageForm.value.name;
    this.page.title = this.pageForm.value.title;
    this.pageService.updatePage(this.pageId, this.page);

    this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
  }

  delete() {
    this.pageService.deletePage(this.pageId);

    alert('Page ' + this.name + ' has been deleted!');
    this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );
    this.page = this.pageService.findPageById(this.pageId);
    this.name = this.page.name;
    this.title = this.page.title;
  }

}