import { Component, OnInit, Testability } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-patients-on-waitinglist',
  templateUrl: './patients-on-waitinglist.component.html',
  styleUrls: ['./patients-on-waitinglist.component.css']
})
export class PatientsOnWaitinglistComponent implements OnInit {

  patientCol: AngularFirestoreCollection<any>;
  patients: Observable<any[]>;

  inpatientCol: AngularFirestoreCollection<any>;
  inpatients: Observable<any[]>;

  combinedListCol: AngularFirestoreCollection<any>;
  combinedList: Observable<any[]>;

  clicked: boolean = false;

  constructor(private db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  getPatient(id) {
    this.patients = this.db.collection("Patients", ref => ref.where('PatientNumber', '==', id)).valueChanges();
    this.clicked = true;
  }

  ngOnInit() {
    this.patientCol = this.db.collection('Patients');
    this.patients = this.patientCol.valueChanges();

    this.inpatientCol = this.db.collection('Inpatients', ref => ref.where('WardPlaced', '==', 1));
    this.inpatients = this.inpatientCol.valueChanges();
  }

}
