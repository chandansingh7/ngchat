import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {

  constructor(private register: RegisterService) { }

  ngOnInit(): void {
    console.log(this.register.getData());
  }

}
