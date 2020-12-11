import {Component} from '@angular/core';
import {Friend} from "./friend";
import {AddFriendService} from "./add-friend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  languages = ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'SYMFONY', 'LARAVEL', 'REACT'];

  friendModel = new Friend('', '', '', 0, '');

  private addFriendService: AddFriendService;

  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService;
  }


 public showData(): any {
    this.addFriendService.addFriend(this.friendModel)
      .subscribe(
      succes => console.log(this.showData),
      error => console.log(error)
    );
    return console.log(this.friendModel);
  }

}
