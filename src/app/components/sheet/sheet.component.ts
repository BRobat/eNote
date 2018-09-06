import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css'],
  providers: []
})
export class SheetComponent{


  notesRef$: AngularFireList<any>; 
  notes$: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.notesRef$ = db.list("/Notes", ref => ref.orderByChild("/queueP"));
    this.notes$ = this.notesRef$.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        
      ));
  }
}
