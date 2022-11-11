import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { RegisterViewComponent } from '../register-view/register-view.component';

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

  addMessage(message: string) {
    // const input = document.getElementById('chatTextId')?.nodeValue;
    // console.log(input);
    // const timestamp = new Date();
    // const sn = this.r.userScreenName;//ok nothing on chat page its empty //un
    // const cr = this.r.userChatRoom;
    // this.tableData.push({ message, timestamp, cr, sn });  // even backend server data?
  }
}
//ERROR Error: Uncaught (in promise): NullInjectorError: R3InjectorError(AppModule)[RegisterViewComponent -> RegisterViewComponent -> RegisterViewComponent]:

//ya it is working like prev
//Nishant: I am reverting for now. See if it compiles and old functionality is there. Great