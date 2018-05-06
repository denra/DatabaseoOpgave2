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
  methodOfAdmin: string;
  unitsPerDay: string;
  startDate: Date;
  finishDate: Date;
  
  docid: string = this.randomMedicationNumber();

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

  ngOnInit() {
  }

}
