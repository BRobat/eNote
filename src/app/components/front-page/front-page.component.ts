import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {

  constructor(private afAuth: AngularFireAuth) { 
    
   }


  login() {
    // this should be in service
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
