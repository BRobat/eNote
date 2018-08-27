import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addNote(note) {
    if(note){
      console.log(note);
    }
    
  }

}
