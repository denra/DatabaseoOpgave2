import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Patients{
  PatientNumber: string;
}
interface Drugs{
  DrugNumber: number;
  DrugName: string;
  Description: string;
}

@Component({
  selector: 'app-medicationforpatient',
  templateUrl: './medicationforpatient.component.html',
  styleUrls: ['./medicationforpatient.component.css']
})

export class MedicationforpatientComponent implements OnInit {

  patient: string;
  drugNumber: number;
  drugName: string;
  description: string;
  dosage: string;
  methodOfAdmin: string;
  unitsPerDay: string;
  startDate: Date;
  finishDate: Date;
  
  docid: string = this.randomMedicationNumber();

  isVisibleCreateMedication: boolean = true;
  isVisibleUpdateMedication: boolean = false;

  medicationCol: AngularFirestoreCollection<any[]>;
  medication: Observable<any[]>;
  private patientsCol: AngularFirestoreCollection<Patients>;
  Patients: Observable<Patients[]>;
  private drugsCol: AngularFirestoreCollection<Drugs>;
  drugs: Observable<Drugs[]>;

  constructor(public db: AngularFirestore) { 
    db.firestore.settings({ timestampsInSnapshots: true});
  }

  randomMedicationNumber() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  onSubmit4(){
    this.db.collection('Medication').doc(this.docid).set({
      'DrugNumber': this.drugNumber,
      'Description': this.description,
      'DrugName': this.drugName
    })
  }
  ngOnInit() {
    this.medicationCol = this.db.collection('Medication');
    this.medication = this.medicationCol.valueChanges();
    this.patientsCol = this.db.collection('Patients');
    this.Patients = this.patientsCol.valueChanges();
    this.drugsCol = this.db.collection('Medication');
    this.drugs = this.drugsCol.valueChanges();
  }

}
