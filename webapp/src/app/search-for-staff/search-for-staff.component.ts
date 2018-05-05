import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-for-staff',
  templateUrl: './search-for-staff.component.html',
  styleUrls: ['./search-for-staff.component.css']
})
export class SearchForStaffComponent implements OnInit {

  staffCol: AngularFirestoreCollection<any>;
  staffs: Observable<any[]>;
  theStaff: Observable<any[]>;

  qualifications: string;
  workexperience: string;

  constructor(private db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  seachQualifications() {
    this.staffs = this.db.collection("Staff", ref => ref.where('Qualifications.Institution', '==', this.qualifications))
      .valueChanges();
  }

  seachWorkexperince() {
    console.log(this.workexperience);
    this.theStaff = this.db.collection("Staff", ref => ref.where('WorkExperience.Organization', '==', this.workexperience))
      .valueChanges();
  }

  ngOnInit() {
    this.staffCol = this.db.collection('Staff');
    this.staffs = this.staffCol.valueChanges();
    this.theStaff = this.staffCol.valueChanges();
  }

}
