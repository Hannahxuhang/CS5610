import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;
  username: string;
  password: string;
  verifiedPassword: string;
  errorFlag: boolean;
  errorMessage: string;

  constructor(private userService: UserService, private router: Router) { }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifiedPassword = this.registerForm.value.very_password;

    // console.log('password: ' + this.password);
    // console.log('verified password: ' + this.verifiedPassword);
    // console.log(this.password === this.verifiedPassword);

    if (this.password !== this.verifiedPassword) {
      this.errorFlag = true;
    } else {
      const user: User = new User('' + Math.round(Math.random() * 1000), this.username, this.password, '', '', '');
      this.userService.createUser(user).subscribe(
        (data: User) => {
          this.errorFlag = false;
          this.router.navigate(['/user', data._id]);
        },
        (error: any) => console.log(error)
      );
    }
  }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMessage = 'Password not match!';
  }
}
