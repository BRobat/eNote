import { Component } from '@angular/core';
import { NoteInputService } from './services/noteInput.service';
import { NoteSourceService } from './services/noteSource.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ NoteInputService, NoteSourceService ]
})
export class AppComponent {
  
}
