import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('f') profileForm: NgForm;
  userId: String;
  user: User;
  username: String;
  email: String;
  firstName: String;
  lastName: String;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  update() {
    this.user.username = this.profileForm.value.username;
    this.user.firstName = this.profileForm.value.firstName;
    this.user.lastName = this.profileForm.value.lastName;
    this.user.email = this.profileForm.value.email;
    this.userService.updateUser(this.userId, this.user);
    this.router.navigate(['user', this.user._id]);
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );
    this.user = this.userService.findUserById(this.userId);
    this.username = this.user.username;
    this.email = this.user.email;
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
  }

}
