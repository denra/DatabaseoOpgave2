import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-getinpatientinward',
  templateUrl: './getinpatientinward.component.html',
  styleUrls: ['./getinpatientinward.component.css']
})

export class GetinpatientinwardComponent implements OnInit {

  inpatient: AngularFirestoreCollection<any>;
  inpatients: Observable<any[]>;
  theInpatient:Observable<any[]>;

  ward: number;

  constructor(public db: AngularFirestore) { 
    db.firestore.settings({ timestampsInSnapshots: true});
  }

  seachPatientinWard() {
    this.inpatients = this.db.collection("Inpatients", ref => ref.where('WardPlaced', '==', this.ward))
      .valueChanges();
  }

  ngOnInit() {
    this.inpatient = this.db.collection('Inpatients');
    this.inpatients = this.inpatient.valueChanges();
    this.theInpatient= this.inpatient.valueChanges();
  }

}
