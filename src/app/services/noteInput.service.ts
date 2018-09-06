import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteInputService {

  notesRef: AngularFireList<any>;

  constructor(db: AngularFireDatabase) {
    this.notesRef = db.list('/Notes');
   }

   addNote(text){
     // this should be changed
     let newNote = new Note;
     newNote.text = text;
     newNote.date = Date.now();
     newNote.queueP = 1 - newNote.date;
      
     this.notesRef.push(newNote);
   }
}
