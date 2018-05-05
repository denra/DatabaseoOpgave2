import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
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

  docID: string = this.randomStaffNumber();
  id: string;

  isVisibleCreate: boolean = true;
  isVisibleUpdate: boolean = false;

  staffCol: AngularFirestoreCollection<any>;
  staffs: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  randomStaffNumber() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  onSubmit() {
    this.db.collection('Staff').doc(this.docID).set({
      'StaffNumber': this.docID,
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
      "AllocatedInWard": this.db.doc("Ward/1").ref,
      "Qualifications": [
        {
          "Date": "25-2-2018",
          "Institution": "UCN",
          "Type": "U"
        },
        {
          "Date": "25-2-2016",
          "Institution": "BGJ",
          "Type": "U"
        },
      ],
      "WorkExperience": [
        {
          "StartDate": "25-2-2013",
          "FinishDate": "25-2-2017",
          "Position": "Nurse",
          "Organization": "Aalborg Universitets Hospital"
        },
        {
          "StartDate": "25-2-2011",
          "FinishDate": "25-2-2012",
          "Position": "Nurse",
          "Organization": "Aalborg Universitets Hospital"
        },
      ]
    });
  }

  onEdit(id, firstName, lastName, street, zip, city, gender, dateOfBirth, telephoneNumber, insuranceNumber, position, currentSalary, whenPaid, hoursPerWeek, permanentOrTemporary, salaryScale) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.zip = zip;
    this.city = city;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.telephoneNumber = telephoneNumber;
    this.insuranceNumber = insuranceNumber;
    this.position = position;
    this.currentSalary = currentSalary;
    this.whenPaid = whenPaid;
    this.hoursPerWeek = hoursPerWeek;
    this.permanentOrTemporary = permanentOrTemporary;
    this.salaryScale = salaryScale;

    this.isVisibleCreate = false;
    this.isVisibleUpdate = true;
  }

  onUpdate(id) {
    this.staffCol.doc(id).update({
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
          "Date": "25-2-2018",
          "Institution": "UCN",
          "Type": "U"
        },
        {
          "Date": "25-2-2016",
          "Institution": "BGJ",
          "Type": "U"
        },
      ],
      "WorkExperience": [
        {
          "StartDate": "25-2-2013",
          "FinishDate": "25-2-2017",
          "Position": "Nurse",
          "Organization": "Aalborg Universitets Hospital"
        },
        {
          "StartDate": "25-2-2011",
          "FinishDate": "25-2-2012",
          "Position": "Nurse",
          "Organization": "Aalborg Universitets Hospital"
        },
      ]
     });
  }

  ngOnInit() {
    this.staffCol = this.db.collection('Staff');
    this.staffs = this.staffCol.valueChanges();
  }

}
