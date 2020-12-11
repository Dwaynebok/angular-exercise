export class Friend {

  public _firstName: string;
  public _lastName: string;
  public _email: string;
  public _phoneNumber: number;
  public _languages: string;


  constructor(firstName: string, lastName: string, email: string, phoneNumber: number, languages: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._languages = languages;
  }


}
