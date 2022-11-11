import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {
  tableData: any[] = [];

  constructor(private register: RegisterService) { }

  ngOnInit(): void {
    this.tableData = this.register.getData();
    // console.log(this.tableData);
    // console.log(this.chatData[0].message);
    // console.log(this.chatData[1].timestamp);
    // console.log(this.chatData[0].chatRoom);
  }

  addMessage(screenName: string, message: string, chatRoom: string) {
    const input = document.getElementById('chatTextId')?.nodeValue;
    console.log(input);
    const timestamp = new Date();
    this.tableData.push({ message, timestamp, chatRoom, screenName });
  }
}

