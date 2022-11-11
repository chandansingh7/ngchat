import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {
  @Input() chatData: any[][] = [];

  constructor(private register: RegisterService) { }

  ngOnInit(): void {
    //this.chatData
= this.register.getData(); console.log(this.register.getData());
  }

}
