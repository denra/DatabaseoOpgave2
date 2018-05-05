import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-get-update-patients',
  templateUrl: './get-update-patients.component.html',
  styleUrls: ['./get-update-patients.component.css']
})
export class GetUpdatePatientsComponent implements OnInit {

  patient;
  constructor(public db: AngularFirestore) {
    console.log('constructor');
    
    this.db.collection('Patients').doc('6iExg').ref.get().then((doc) =>{
      if (doc.exists){
        console.log('Document data: ', doc.data());
        this.patient = doc.data();
      }else{
        console.log('No such document');
      }
    }).catch(function(error) {
      console.log('Error in getting the document: ', error);
    });

   }

  ngOnInit() {
  }

}
