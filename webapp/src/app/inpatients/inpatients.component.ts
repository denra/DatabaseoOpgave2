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
  dateplacedinward?: Date;
  dateleave: Date;
  actualleave?: Date;
  bednumber?: number;

  inpatient: AngularFirestoreCollection<any[]>;
  inpatients: Observable<any[]>;
  private patients: AngularFirestoreCollection<Patients>;
  Patients: Observable<Patients[]>;
  private Ward: AngularFirestoreCollection<Ward>;
  Wards: Observable<Ward[]>;

  docid: string = this.randomInpatientNumber();
  id: string;
  isVisibleCreatePatient: boolean = true;
  isVisibleUpdatePatient: boolean = false;

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
      'InpatientNumber': this.docid,
      'Patient': this.patient,
      'WardPlaced': this.ward,
      'DatePlacedOnList': this.dateplacedonlist,
      'ExpectedStay': this.expectedstay,
      'DatePlacedInWard': this.dateplacedinward,
      'DateLeave': this.dateleave,
      'ActualLeave': this.actualleave,
      'BedNumber': this.bednumber
    });
  }

  onEdit(id, patient, ward, dateplacedonlist, expectedstay, dateplacedinward, dateleave, actualleave, bednumber){
    this.id = id;
    this.patient = patient;
    this.ward = ward;
    this.dateplacedonlist = dateplacedonlist;
    this.expectedstay = expectedstay;
    this.dateplacedinward = dateplacedinward;
    this.dateleave = dateleave;
    this.actualleave = actualleave;
    this.bednumber = bednumber;

    this.isVisibleCreatePatient = false;
    this.isVisibleUpdatePatient = true;
  }

  onUpdate2(id){
    this.inpatient.doc(id).update({
      'Patient': this.patient,
      'WardPlaced': this.ward,
      'DatePlacedOnList': this.dateplacedonlist,
      'ExpectedStay': this.expectedstay,
      'DatePlacedInWard': this.dateplacedinward,
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
    this.inpatient = this.db.collection('Inpatients');
    this.inpatients = this.inpatient.valueChanges();
  }

}
