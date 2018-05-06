import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Patients{
  PatientNumber: string;
}

@Component({
  selector: 'app-medicationforpatient',
  templateUrl: './medicationforpatient.component.html',
  styleUrls: ['./medicationforpatient.component.css']
})

export class MedicationforpatientComponent implements OnInit {

  drugNumber: number;
  drugName: string;
  description: string;
  dosage: string;
  

  constructor(public db: AngularFirestore) { 
    db.firestore.settings({ timestampsInSnapshots: true});
  }

  ngOnInit() {
  }

}
