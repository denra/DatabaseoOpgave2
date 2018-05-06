import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { map } from 'rxjs/operators';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-create-maintain-outpatients',
  templateUrl: './create-maintain-outpatients.component.html',
  styleUrls: ['./create-maintain-outpatients.component.css']
})
export class CreateMaintainOutpatientsComponent implements OnInit {

  patientCol: AngularFirestoreCollection<any>;
  patients: Observable<any[]>;

  outpatientCol: AngularFirestoreCollection<any>;
  outpatients: Observable<any[]>;

  combinedList: Observable<any[]>;

  clicked: boolean = false;

  constructor(private db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  addToOutpatients(id) {
    this.db.collection('Outpatients').doc(id).set({
      'OutPatientNumber': id,
      'DateTimeOfAppointmentToClinic': new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear()
    });

    this.patientCol.doc(id).update({
      "Outpatient": this.db.doc("Outpatients/" + id).ref,
    });
  }

  removeFromOutpatients(id) {
    this.patientCol.doc(id).update({
      "Outpatient": firebase.firestore.FieldValue.delete()
    });

    this.db.collection("Outpatients").doc(id).delete();
  }

  getPatient(id) {
    this.patients = this.db.collection("Patients", ref => ref.where('PatientNumber', '==', id)).valueChanges();
    this.clicked = true;
  }

  ngOnInit() {
    this.patientCol = this.db.collection('Patients');
    this.patients = this.patientCol.valueChanges();

    this.outpatientCol = this.db.collection('Outpatients');
    this.outpatients = this.outpatientCol.valueChanges();

    // this.combinedList = combineLatest<any[]>(this.outpatients, this.patients).pipe(
    //   map(arr => arr.reduce((acc, cur) => acc.concat(cur))),
    // )
  }

}
