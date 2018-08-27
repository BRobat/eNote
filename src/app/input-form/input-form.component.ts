import { NoteService } from './../note.service';
import { Component, Input} from '@angular/core';
import { Note } from 


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent{

  defaultValue = "";
  date = "2018";

  constructor(private data: NoteService) { }

  newNote(text) {
    let date = new Date().toLocaleDateString();

    if(text){
      this.data.addNote(text, date);
    }
    this.defaultValue= "";
    
  }

}
