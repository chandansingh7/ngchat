import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, Output } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { ChatModel } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class RegisterService implements OnInit {
  @Output() chatModels: ChatModel[] = []

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<ChatModel[]>("https://us-central1-pka-forms-fef14.cloudfunctions.net/getMessages?room=Mystic-1-4-U").subscribe(
    )
  }


  // ----------------

  getData() {
    return this.httpClient.get<ChatModel[]>("https://us-central1-pka-forms-fef14.cloudfunctions.net/getMessages?room=Mystic-1-4-U").
      subscribe((data) => {
        this.chatModels = data;
        //console.log(data);
        //console.log(this.chatModels);
        // console.log(this.chatModels[0].message);
        // console.log(this.chatModels[1].timestamp);
        // console.log(this.chatModels[0].chatRoom);
        // console.log(this.chatModels[0].screenName);
      })
  }


}