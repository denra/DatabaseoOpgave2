import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-create-maintain-suppliers',
  templateUrl: './create-maintain-suppliers.component.html',
  styleUrls: ['./create-maintain-suppliers.component.css']
})
export class CreateMaintainSuppliersComponent implements OnInit {

  isVisibleCreate: boolean = true;
  isVisibleUpdate: boolean = false;

  supplierCol: AngularFirestoreCollection<any>;
  suppliers: Observable<any[]>;

  docID: string = this.randomSupplierNumber();

  supplierNumber: string;
  supplierName: string;
  street: string;
  zip: string;
  city: string;
  email: string;
  phoneNumber: string;
  fax: string;

  constructor(private db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  randomSupplierNumber() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  onSubmit() {
    this.db.collection('Suppliers').doc(this.docID).set({
      'SupplierNumber': this.docID,
      'SupplierName': this.supplierName,
      'Address': {
        'Street': this.street,
        'Zip': this.zip,
        'City': this.city
      },
      'Email': this.email,
      'PhoneNumber': this.phoneNumber,
      'Fax': this.fax
    });
  }

  onEdit(supplierNumber, supplierName, street, zip, city, email, phoneNumber, fax) {
    this.supplierNumber = supplierNumber;
    this.supplierName = supplierName;
    this.street = street;
    this.zip = zip;
    this.city = city;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.fax = fax;

    this.isVisibleCreate = false;
    this.isVisibleUpdate = true;
  }

  onUpdate(id) {
    this.supplierCol.doc(id).update({
      'SupplierNumber': id,
      'SupplierName': this.supplierName,
      'Address': {
        'Street': this.street,
        'Zip': this.zip,
        'City': this.city
      },
      'Email': this.email,
      'PhoneNumber': this.phoneNumber,
      'Fax': this.fax
    });
  }

  ngOnInit() {
    this.supplierCol = this.db.collection('Suppliers');
    this.suppliers = this.supplierCol.valueChanges();
  }

}
