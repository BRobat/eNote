import { Component } from '@angular/core';
import { NoteInputService } from './services/noteInput.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ NoteInputService ]
})
export class AppComponent {
  
}
