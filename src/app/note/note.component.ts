import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  title = "random";
  text = "dump";
  date = "date";

  constructor() { }

  ngOnInit() {
  }

}
