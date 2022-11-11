import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterViewComponent } from './chat/register-view/register-view.component';
import { ChatViewComponent } from './chat/chat-view/chat-view.component';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';

const routes: Routes = [
  {
    path: "register",
    pathMatch: "full",
    component: RegisterViewComponent,
  },
  {
    path: "chat",
    pathMatch: "full",
    component: ChatViewComponent,
  },
  {
    path: "",
    pathMatch: "full",
    component: AppComponent,
  },
  {
    path: "home",
    pathMatch: "full",
    component: HomeViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
