import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  Chaters: string[] = ["Fun with Taxes", "The Dark Web", "Everything NG", "Mystic 1-4-U"];
  public userScreenName: string = "";
  public userChatRoom: string = "";
  inputValue: string = ""

  constructor(private register: RegisterService) { }

  ngOnInit(): void {

  }

  getChatValues(screenName: string, chatRoom: string): void {
    this.userScreenName = screenName;
    this.userChatRoom = chatRoom;
    console.log('inputValue', this.inputValue);
  }

}
