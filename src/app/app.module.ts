import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingupreactiveComponent } from './singupreactive/singupreactive.component';
import { LoginComponent } from './login/login.component';
import { CapitalizePipe } from './capitalize.pipe';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { NgxEditorModule} from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

let firebaseConfig = {
  apiKey: "AIzaSyB-W2Ife-Fmp42thLyQirsknbTaYt5R8KA",
  authDomain: "scribe-1b32d.firebaseapp.com",
  databaseURL: "https://scribe-1b32d.firebaseio.com",
  projectId: "scribe-1b32d",
  storageBucket: "scribe-1b32d.appspot.com",
  messagingSenderId: "259361774248",
  appId: "1:259361774248:web:bc75801422824fb8"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SingupreactiveComponent,
    LoginComponent,
    CapitalizePipe,
    MenuComponent,
    HomeComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostsComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
