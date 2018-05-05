import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-getstaffinward',
  templateUrl: './getstaffinward.component.html',
  styleUrls: ['./getstaffinward.component.css']
})
export class GetstaffinwardComponent implements OnInit {

  staff: AngularFirestoreCollection<any[]>;
  staffs: Observable<any[]>;

  constructor(public db: AngularFirestore) { 
    db.firestore.settings({ timestampsInSnapshots: true});

    db.collection('Staff').where('AllocatedInWard', '==', 'Ward/1').get().then(function(querySnapshot) {
      querySnapshot.ForEach(function(doc) {
        console.log(doc.id, '=>', doc.Data());
      })
    }).catch(function(error){
      console.log('Error in getting documents: ', error);
    });
  }

  ngOnInit() {
  }

}
