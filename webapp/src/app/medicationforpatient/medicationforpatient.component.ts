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
  
  id:string;

  docid: string = this.randomMedicationNumber();
  docid2: string = this.randomMedicationNumber();

  isVisibleCreateMedication: boolean = true;
  isVisibleUpdateMedication: boolean = false;

  medicationCol: AngularFirestoreCollection<any[]>;
  medication: Observable<any[]>;
  patientMedicationCol: AngularFirestoreCollection<any[]>;
  patientMedication: Observable<any[]>;
  private patientsCol: AngularFirestoreCollection<Patients>;
  Patients: Observable<Patients[]>;
  private drugsCol: AngularFirestoreCollection<Drugs>;
  Drugs: Observable<Drugs[]>;

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

  onEdit(id, patient, drugNumber, drugName, description, dosage, methodOfAdmin, unitsPerDay, startDate, finishDate){
    this.id = id;
    this.patient = patient;
    this.drugNumber = drugNumber;
    this.drugName = drugName;
    this.description = description;
    this.dosage = dosage;
    this.methodOfAdmin = methodOfAdmin;
    this.unitsPerDay = unitsPerDay;
    this.startDate = startDate;
    this.finishDate = finishDate;

    this.isVisibleCreateMedication = false;
    this.isVisibleUpdateMedication = true;
  }

  onSubmit4(){
    this.db.collection('Medication').doc(this.docid).set({
      'DrugNumber': this.drugNumber,
      'Description': this.description,
      'DrugName': this.drugName
    })
  }

  onSubmit5(){
    this.db.collection('PatientMedication').doc(this.docid2).set({
      'PatientMedication': this.docid2,
      'DrugNumber': this.drugNumber,
      'Description': this.description,
      'DrugName': this.drugName,
      'Patient': this.patient,
      'Dosage': this.dosage,
      'MethodOfAdmin': this.methodOfAdmin,
      'UnitsPerDay': this.unitsPerDay,
      'StartDate': this.startDate,
      'FinishDate': this.finishDate
    })
  }

  ngOnInit() {
    this.medicationCol = this.db.collection('Medication');
    this.medication = this.medicationCol.valueChanges();
    this.patientsCol = this.db.collection('Patients');
    this.Patients = this.patientsCol.valueChanges();
    this.drugsCol = this.db.collection('Medication');
    this.Drugs = this.drugsCol.valueChanges();
    this.patientMedicationCol = this.db.collection('PatientMedication');
    this.patientMedication = this.patientMedicationCol.valueChanges();
  }

}
