import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Staff {
  FirstName: string;
  LastName: string;
  AllocatedInWard: string;
}

@Component({
  selector: 'app-getstaffinward',
  templateUrl: './getstaffinward.component.html',
  styleUrls: ['./getstaffinward.component.css']
})
export class GetstaffinwardComponent implements OnInit {

  private staff: AngularFirestoreCollection<Staff>;
  staffs: Observable<Staff[]>;

  constructor(public db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true});

    // db.collection('Staff', ref => ref.where('AllocatedInWard', '==', 'Ward/1'));
    // var staffRef = db.collection('Staff');
    // var query = staffRef.where('capital', '==', true).get()
    // .then(snapshot => {
    //   snapshot.forEach(doc => {
    //     console.log(doc.id, '=>', doc.data());
    //   });
    // })
    // .catch(err => {
    //   console.log('Error getting documents', err);
    // });
  }

  ngOnInit() {
    this.staff = this.db.collection('Staff');
    this.staffs = this.staff.valueChanges();
  }

}
