import { Component } from '@angular/core';
import { NoteService } from '../note.service';


@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css'],
  providers: [NoteService]
})
export class SheetComponent{

  notes$;

  constructor(private noteService: NoteService) {
    
    console.log(noteService);
    
  }

  ngOnInit(){
    this.getNotes()
  }

  getNotes() {
    this.notes$ = this.noteService.getNotes();
  }



}
