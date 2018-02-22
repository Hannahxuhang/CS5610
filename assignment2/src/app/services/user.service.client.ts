import { User } from '../models/user.model.client';
import { Injectable } from '@angular/core';

// Injecting service into module
@Injectable()

export class UserService {
  users: User[] = [
    new User('123', 'alice', 'alice', '', '', ''),
    new User('234', 'bob', 'bob', '', '', ''),
    new User('456', 'jannunzi', 'jannunzi', '', '', '')
  ];

  api = {
    'createUser': this.createUser,
    'findUserByCredential': this.findUserByCredentials,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser
  };

  createUser(user: User) {
    user._id = '' + Math.round(Math.random() * 1000);
    this.users.push(user);
  }

  findUserById(userId: String) {
    return this.users.find(function (user) {
      return user._id === userId;
    });
  }

  findUserByUsername(username: String) {
    return this.users.find(function (user) {
      return user.username === username;
    });
  }

  findUserByCredentials(username: String, password: String) {
    return this.users.find(function (user) {
      return user.username === username && user.password === password;
    });
  }

  updateUser(userId: String, user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        this.users[i].username = user.username;
        this.users[i].password = user.password;
        this.users[i].email = user.email;
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
      }
    }
  }

  deleteUser(userId: String) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        // Make sure j is a number
        const j = +i;
        this.users.splice(j, 1);
      }
    }
  }
}

