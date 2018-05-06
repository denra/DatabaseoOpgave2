import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-supplies-in-ward',
  templateUrl: './supplies-in-ward.component.html',
  styleUrls: ['./supplies-in-ward.component.css']
})
export class SuppliesInWardComponent implements OnInit {

  suppliesCol: AngularFirestoreCollection<any>;
  supplies: Observable<any[]>;

  wardCol: AngularFirestoreCollection<any>;
  wards: Observable<any[]>;

  wardRequistionCol: AngularFirestoreCollection<any>;
  wardRequistions: Observable<any[]>;

  combinedListCol: AngularFirestoreCollection<any>;
  combinedList: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  ngOnInit() {
    this.suppliesCol = this.db.collection('Supplies', ref => ref.where('WardNumber', '==', 1));
    this.supplies = this.suppliesCol.valueChanges();

    this.wardCol = this.db.collection('Ward', ref => ref.where('WardNumber', '==', 1));
    this.wards = this.wardCol.valueChanges();

    this.wardRequistionCol = this.db.collection('WardRequistion', ref => ref.where('WardNumber', '==', 1));
    this.wardRequistions = this.suppliesCol.valueChanges();

    this.combinedList = combineLatest<any[]>(this.supplies, this.wards, this.wardRequistions).pipe(
      map(arr => arr.reduce((acc, cur) => acc.concat(cur))),
    )
  }

}
