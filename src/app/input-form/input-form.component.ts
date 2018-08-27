import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  defaultValue = ""

  constructor() { }

  ngOnInit() {
  }

  addNote(note) {
    if(note){
      console.log(note);
    }
    this.defaultValue= "";
    
  }

}
