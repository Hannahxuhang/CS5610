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
  userId: string;
  websiteId: string;
  pageId: string;
  name: string;
  page: Page;
  title: string;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  update() {
    this.page.name = this.pageForm.value.name;
    this.page.title = this.pageForm.value.title;
    this.pageService.updatePage(this.pageId, this.page).subscribe(
      (page: Page) => {
        this.page = page;
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
      },
      (error: any) => console.log(error)
    );
  }

  delete() {
    this.pageService.deletePage(this.pageId).subscribe(
      () => {
        this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
      },
      (error: any) => console.log(error)
    );

    alert('Page ' + this.name + ' has been deleted!');
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];

          this.pageService.findPageById(this.pageId).subscribe(
            (page: Page) => {
              this.page = page;
              this.name = page.name;
              this.title = page.title;
            },
            (error: any) => console.log(error)
          );
        }
      );
  }
}
