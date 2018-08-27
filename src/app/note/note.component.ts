import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  text = "random stuff 'cause I need something here to see how the text wraps and stuff.";
  date = "2018-08-27";

  constructor() { }

  ngOnInit() {
  }

}
