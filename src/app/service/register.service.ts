import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ChatModel } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class RegisterService implements OnInit {
  chatModels: ChatModel[] = []
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<ChatModel[]>("https://us-central1-pka-forms-fef14.cloudfunctions.net/getMessages?room=Mystic-1-4-U").subscribe(
      // map((data) => {
      //   this.chatModels = data,
      // })
    )
  }
  getData() {
    console.log("from getData");
    return this.httpClient.get<ChatModel[]>("https://us-central1-pka-forms-fef14.cloudfunctions.net/getMessages?room=Mystic-1-4-U")
      .subscribe(res => { this.chatModels = res });
  }
}
