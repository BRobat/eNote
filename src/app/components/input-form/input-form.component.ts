import { NoteInputService } from '../../services/noteInput.service';
import { Component, Input} from '@angular/core';
import { Note } from 


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent{

  defaultValue = "";
  date;

  constructor(private data: NoteInputService) { }

  newNote(text) {
    let date = new Date();

    if(text){
      this.data.addNote(text, date);
    }
    this.defaultValue = ""; 
  }
}