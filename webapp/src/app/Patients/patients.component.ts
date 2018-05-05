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

  randomPatientNumber() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  onSubmit2(){
    var docData = {
      'FirstName': this.firstname,
      'LastName': this.lastname,
      'Address': {
        'Street': this.street,
        'Zip': this.zip,
        'City': this.city
      },
      'DateOfBirth': this.dateOfBirth,
      'PhoneNumber': this.telephoneNumber,
      'Gender': this.gender,
      'MaritalStatus': this.maritalstatus,
      'LocalDoctor':{
        'FullName': this.fullnamelocaldoctor,
        'ClinicNumber': this.clinicnumber,
        'Address':{
          'Street': this.streetlocaldoctor,
          'Zip': this.ziplocaldoctor,
          'City': this.citylocaldoctor
        },
        'PhoneNumber': this.phonenumber
      },
      'NextOfKin': [
        {
          'FullName': 'lksdmf sdf',
          'RelationshipToPatient': 'Married',
          'Address':{
            'Street': 'Glastersgade 2',
            'Zip': '9400',
            'City': 'Noerresundby'
          },
          'PhoneNumber': '65151251'
        },
        {
          'FullName': 'fgdgd wfjk',
          'RelationshipToPatient': 'Son',
          'Address':{
            'Street': 'Glastersgade 2',
            'Zip': '9400',
            'City': 'Noerresundby'
          },
          'PhoneNumber': '45647346'
        },
      ]
    };
    this.db.collection('Patients').doc(this.randomPatientNumber()).set(docData);
  }

  ngOnInit() {
  }

}
