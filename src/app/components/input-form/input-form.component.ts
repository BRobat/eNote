import { NoteInputService } from '../../services/noteInput.service';
import { Component } from '@angular/core';
import { Note } from '../../model/note';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent{

  defaultValue = "";

  constructor(private data: NoteInputService) { }

  newNote(text) {

    if(text){
      this.data.addNote(text);
    }
    this.defaultValue = ""; 
  }
}