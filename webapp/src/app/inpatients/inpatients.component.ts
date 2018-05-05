import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-inpatients',
  templateUrl: './inpatients.component.html',
  styleUrls: ['./inpatients.component.css']
})
export class InpatientsComponent implements OnInit {

  Patients;
  dateplacedonlist: Date;
  expectedstay: number;
  dateplacedinward: Date;
  dateleave: Date;
  actualleave: Date;
  bednumber: number;

  inpatient: AngularFirestoreCollection<any[]>;
  inpatients: Observable<any[]>;

  constructor(public db: AngularFirestore) { 
    db.firestore.settings({ timestampsInSnapshots: true});
  }

  getFromPatients(){
   
  }
  ngOnInit() {
  }

}
