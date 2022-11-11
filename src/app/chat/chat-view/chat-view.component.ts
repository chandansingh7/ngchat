import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {
  tableData: any[] = [];
  //serverData: any[] = [];

  constructor(private register: RegisterService) { }

  ngOnInit(): void {
    //this.tableData = this.register.chatModels; -> Nishant: No need for this
    // console.log(this.tableData);
    // console.log(this.chatData[0].message);
    // console.log(this.chatData[1].timestamp);
    // console.log(this.chatData[0].chatRoom);

    this.tableData = [{ "chatRoom": "Mystic-1-4-U", "screenName": "bradmoon", "timestamp": "2022-11-11T20:49:51.495Z", "message": "hello this is brad in class 2022-11-11" },
    { "timestamp": "2022-01-20T21:26:59.709Z", "chatRoom": "Mystic-1-4-U", "message": "Hy", "screenName": "Alex" },
    { "message": "Hello world", "timestamp": "2022-01-20T20:49:51.495Z", "chatRoom": "Mystic-1-4-U", "screenName": "Hamid" },
    { "chatRoom": "Mystic-1-4-U", "timestamp": "2022-01-20T20:49:51.495Z", "screenName": "Alex Test Data", "message": "hello this is brad in class 2022-01-20" },
    { "screenName": "bradmoon", "timestamp": "2022-01-20T20:49:51.495Z", "message": "hello this is brad in class 2022-01-20", "chatRoom": "Mystic-1-4-U" },
    { "timestamp": "2022-01-20T20:49:51.495Z", "chatRoom": "Mystic-1-4-U", "screenName": "Alex Test Data", "message": "hello this is brad in class 2022-01-20" },
    { "screenName": "bradmoon", "timestamp": "2021-10-04T20:49:51.495Z", "message": "more messages from brad hello this is brad in class 2021-09-27", "chatRoom": "Mystic-1-4-U" },
    { "timestamp": "2021-10-04T18:45:11.673Z", "message": "kim", "chatRoom": "Mystic-1-4-U", "screenName": "xyz" },
    { "chatRoom": "Mystic-1-4-U", "message": "hey ", "screenName": "test User", "timestamp": "2021-10-04T18:06:02.273Z" },
    { "timestamp": "2021-10-04T16:56:17.773Z", "chatRoom": "Mystic-1-4-U", "message": "I am batman.", "screenName": "Henok" },
    { "chatRoom": "Mystic-1-4-U", "timestamp": "2021-10-04T16:54:43.419Z", "screenName": "Henok", "message": "Hi" },
    { "chatRoom": "Mystic-1-4-U", "message": "Hello", "screenName": "Henok", "timestamp": "2021-10-04T16:51:20.083Z" },
    { "chatRoom": "Mystic-1-4-U", "message": "heyy agiain", "timestamp": "2021-10-04T15:29:21.452Z", "screenName": "TEST -JO" },
    { "chatRoom": "Mystic-1-4-U", "timestamp": "2021-10-04T15:24:51.553Z", "message": "heyyyyy", "screenName": "TEST -JO" },
    { "chatRoom": "Mystic-1-4-U", "timestamp": "2021-10-04T15:23:43.931Z", "message": "heyy", "screenName": "TEST -JO" },
    { "screenName": "test12345", "timestamp": "2021-10-04T03:46:09.965Z", "message": "hey there how are you?", "chatRoom": "Mystic-1-4-U" },
    { "timestamp": "2021-10-04T03:45:18.459Z", "message": "Go ahead", "screenName": "test12345", "chatRoom": "Mystic-1-4-U" },
    { "timestamp": "2021-10-04T03:45:01.294Z", "message": "okayyy", "screenName": "test12345", "chatRoom": "Mystic-1-4-U" },
    { "message": "test message 6", "chatRoom": "Mystic-1-4-U", "timestamp": "2021-10-04T03:42:29.783Z", "screenName": "test12345" }, { "message": "test message 5", "timestamp": "2021-10-04T03:25:39.935Z", "chatRoom": "Mystic-1-4-U", "screenName": "test12345" }, { "timestamp": "2021-10-04T03:25:39.935Z", "screenName": "test12345", "chatRoom": "Mystic-1-4-U", "message": "test message 5" }, { "timestamp": "2021-10-04T03:12:58.674Z", "message": "who is this", "screenName": "TEST -JO", "chatRoom": "Mystic-1-4-U" }, { "timestamp": "2021-10-04T03:10:04.938Z", "chatRoom": "Mystic-1-4-U", "message": "hello this is a test from a team #4", "screenName": "anotherUSerrrr" }, { "message": "hello this is a test from a team #4", "chatRoom": "Mystic-1-4-U", "screenName": "anotherUSerrrr", "timestamp": "2021-10-04T03:09:34.703Z" }, { "chatRoom": "Mystic-1-4-U", "screenName": "ddf", "message": "one last message", "timestamp": "2021-10-03T21:11:58.167Z" }];
  }

  // Can call this from register Service, must be PUBLIC
  /* public getData() {
    this.serverData = this.register.chatModels;
  }*/
}

