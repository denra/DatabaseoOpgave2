import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';

interface Patients{
  PatientNumber: string;
}

interface Ward{
  WardNumber: number;
}
@Component({
  selector: 'app-inpatients',
  templateUrl: './inpatients.component.html',
  styleUrls: ['./inpatients.component.css']
})
export class InpatientsComponent implements OnInit {
  patient:string;
  ward:string;
  dateplacedonlist: Date;
  expectedstay: number;
  dateplacedinward: Date;
  dateleave: Date;
  actualleave: Date;
  bednumber: number;

  inpatient: AngularFirestoreCollection<any[]>;
  inpatients: Observable<any[]>;
  private patients: AngularFirestoreCollection<Patients>;
  Patients: Observable<Patients[]>;
  private Ward: AngularFirestoreCollection<Ward>;
  Wards: Observable<Ward[]>;
  docid: string = this.randomInpatientNumber()

  constructor(public db: AngularFirestore) { 
    db.firestore.settings({ timestampsInSnapshots: true});
  }

  randomInpatientNumber() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  onSubmit3(){
    this.db.collection('Inpatients').doc(this.docid).set({
      'PatientNumber': this.patient,
      'WardPlaced': this.ward,
      'DatePlacedOnList': this.dateplacedonlist,
      'ExpectedStay': this.expectedstay,
      'DateLeave': this.dateleave,
      'ActualLeave': this.actualleave,
      'BedNumber': this.bednumber
    });
  }

  ngOnInit() {
    this.patients = this.db.collection('Patients');
    this.Patients = this.patients.valueChanges();
    this.Ward = this.db.collection('Ward');
    this.Wards = this.Ward.valueChanges();
  }

}
