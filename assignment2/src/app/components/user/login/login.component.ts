import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding
  errorFlag: boolean;
  errorMessage: String;

  constructor(private userService: UserService, private router: Router) { }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    alert(this.username);

    const user: User = this.userService.findUserByCredentials(this.username, this.password);

    console.log('user: ' + user);

    if (user) {
      this.router.navigate(['/user', user._id]);
    } else {
      this.errorFlag = true;
    }
  }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMessage = 'Invalid username or password!';
  }
}