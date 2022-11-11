import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  Chaters: string[] = ["Fun with Taxes", "The Dark Web", "Everything NG", "Mystic 1-4-U"]
  constructor(private register: RegisterService) { }

  ngOnInit(): void {

  }

}
