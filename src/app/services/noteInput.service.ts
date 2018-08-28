import { SheetComponent } from '../sheet/sheet.component';
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
  notes$: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.notesRef = db.list('/Notes');
    this.notes$ = this.notesRef.snapshotChanges().pipe(
      map(changes =>
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() })),
    ));

   }

   getNotes() {
     return this.notes$;
   }

   addNote(text, date){
     // this should be changed
     let newNote = new Note;
     newNote.text = text;
     newNote.date = Date.now();
      
     this.notesRef.push(newNote);
   }



}
