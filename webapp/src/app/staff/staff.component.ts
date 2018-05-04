import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  firstName: string;
  lastName: string;
  street: string;
  zip: number;
  city: string;
  gender: string;
  dateOfBirth: Date;
  telephoneNumber: string;
  insuranceNumber: string;
  position: string;
  currentSalary: number;
  whenPaid: string;
  hoursPerWeek: number;
  permanentOrTemporary: string;
  salaryScale: string;

  staff: AngularFirestoreCollection<any[]>;
  staffs: Observable<any[]>;

  constructor(public db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true });
    this.staff = this.db.collection('Staff');
    this.staffs = this.staff.valueChanges();
  }

  randomStaffNumber() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  onSubmit() {
    var docData = {
      'FirstName': this.firstName,
      "LastName": this.lastName,
      "Address": {
        "Street": this.street,
        "Zip": this.zip,
        "City": this.city
      },
      "Gender": this.gender,
      "DateOfBirth": this.dateOfBirth,
      "TelephoneNumber": this.telephoneNumber,
      "InsuranceNumber": this.insuranceNumber,
      "Position": this.position,
      "CurrentSalary": this.currentSalary,
      "WhenPaid": this.whenPaid,
      "HoursPerWeek": this.hoursPerWeek,
      "PermanentOrTemporary": this.permanentOrTemporary,
      "SalaryScale": this.salaryScale,
      "Qualifications": [
        {
          "Date": new Date(2018, 2, 25),
          "Institution": "UCN",
          "Type": "U"
        },
        {
          "Date": new Date(2016, 6, 13),
          "Institution": "BGJ",
          "Type": "U"
        },
      ],
      "WorkExperience": [
        {
          "StartDate": new Date(2016, 2, 25),
          "FinishDate": new Date(2018, 2, 25),
          "Position": "Nurse",
          "Organization": "Aalborg Universitets Hospital"
        },
        {
          "StartDate": new Date(2016, 2, 25),
          "FinishDate": new Date(2018, 2, 25),
          "Position": "Nurse",
          "Organization": "Aalborg Universitets Hospital"
        },
      ]
    };

    this.db.collection("Staff").doc(this.randomStaffNumber()).set(docData);
  }

  ngOnInit() {
  }

}
