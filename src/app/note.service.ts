import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Note } from './model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notesRef: AngularFireList<any>;
  notes$: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.notesRef = db.list('/Notes');
    this.notes$ = this.notesRef.snapshotChanges().pipe(
      map(changes =>
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() })),
    ));
   }

   addNote(note){
     // this should be changed
     let newNote = new Note;
     newNote.text = note.text;
     newNote.date = note.date;
      
     this.notesRef.push(newNote);
   }

}
