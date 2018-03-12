export class User {
  _id: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;

  constructor(_id: string, username: string, password: string, email: string, firstName: string, lastName: string) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
