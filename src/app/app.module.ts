import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment.prod';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';




import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SheetComponent } from './components/sheet/sheet.component';
import { NoteComponent } from './components/note/note.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FrontPageComponent } from './components/front-page/front-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SheetComponent,
    NoteComponent,
    InputFormComponent,
    LoginPageComponent,
    FrontPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path: "frontPage", component: FrontPageComponent},
      {path: "sheet", component: SheetComponent},
      {path: "login", component: LoginPageComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
