import { NoteService } from './../note.service';
import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../model/note';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  providers: [NoteService]
})
export class NoteComponent implements OnInit {

  @Input('note') note: Note;

  constructor() { }

  ngOnInit() {
  }

}
