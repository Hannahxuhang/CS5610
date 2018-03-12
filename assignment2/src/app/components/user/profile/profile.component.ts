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
  userId: string;
  user: User;
  username: string;
  email: string;
  firstName: string;
  lastName: string;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  update() {
    if (this.user.username && this.user.password) {
      this.userService.updateUser(this.userId, this.user).subscribe(
        (user: User) => {
          this.user = user;
        },
        (error: any) => console.log(error)
      );
    }
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.userService.findUserById(this.userId).subscribe(
            (user: User) => {
              this.user = user;
              this.username = this.user.username;
              this.email = this.user.email;
              this.firstName = this.user.firstName;
              this.lastName = this.user.lastName;
            },
            (error: any) => console.log(error)
          );
        }
      );
  }

}
