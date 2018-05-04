import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patientnumber: string;
  firstname: string;
  lastname: string;
  street: string;
  zip: number;
  city: string;
  dateOfBirth: Date;
  telephoneNumber: string;
  gender: string;
  maritalstatus: string;
  dateregistrered: Date;
  fullnamelocaldoctor: string;
  clinicnumber: string;
  streetlocaldoctor: string;
  ziplocaldoctor: number;
  citylocaldoctor: string;
  phonenumber: string;

  patient: AngularFirestoreCollection<any[]>;
  patients: Observable<any[]>;

  constructor(public db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true});
    this.patient = this.db.collection('Patients');
    this.patients = this.patient.valueChanges();
  }

  ngOnInit() {
  }

}
