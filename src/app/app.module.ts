import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment.prod';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SheetComponent } from './sheet/sheet.component';
import { NoteComponent } from './note/note.component';
import { InputFormComponent } from './input-form/input-form.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SheetComponent,
    NoteComponent,
    InputFormComponent,
    LoginPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
