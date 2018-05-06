import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-getpatientmedication',
  templateUrl: './getpatientmedication.component.html',
  styleUrls: ['./getpatientmedication.component.css']
})
export class GetpatientmedicationComponent implements OnInit {

  patientmedicationCol: AngularFirestoreCollection<any>;
  patientmedications: Observable<any[]>;
  thepatientmedication:Observable<any[]>;

  patient: string;

  constructor(public db: AngularFirestore) { 
    db.firestore.settings({ timestampsInSnapshots: true});
  }
  seachPatientMedication() {
    this.patientmedications = this.db.collection("PatientMedication", ref => ref.where('Patient', '==', this.patient))
      .valueChanges();
  }

  ngOnInit() {
    this.patientmedicationCol = this.db.collection('PatientMedication');
    this.patientmedications = this.patientmedicationCol.valueChanges();
    this.thepatientmedication= this.patientmedicationCol.valueChanges();
  }

}
