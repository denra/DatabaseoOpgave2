import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Inpatients{
  patient:string;
  ward:string;
  dateplacedonlist: Date;
  expectedstay: number;
  dateplacedinward: Date;
  dateleave: Date;
  actualleave: Date;
  bednumber: number;
}

@Component({
  selector: 'app-getinpatientinward',
  templateUrl: './getinpatientinward.component.html',
  styleUrls: ['./getinpatientinward.component.css']
})

export class GetinpatientinwardComponent implements OnInit {

  inpatient: AngularFirestoreCollection<Inpatients>;
  inpatients: Observable<Inpatients[]>;

  constructor(public db: AngularFirestore) { 
    db.firestore.settings({ timestampsInSnapshots: true});

    this.inpatient = this.db.collection<Inpatients>('inpatients', ref => {
      return ref.where('WardNumber', '==', '1')
    });
    this.inpatient.snapshotChanges
    this.inpatient.ref.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch(function(error) {
      console.log('Error getting documents: ', error);
    });
  }

  ngOnInit() {
    this.inpatient = this.db.collection('Inpatients');
    this.inpatients = this.inpatient.valueChanges();
  }

}
