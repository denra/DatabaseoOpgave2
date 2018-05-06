import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-createmaintainrequisitions',
  templateUrl: './createmaintainrequisitions.component.html',
  styleUrls: ['./createmaintainrequisitions.component.css']
})
export class CreatemaintainrequisitionsComponent implements OnInit {

  ward: number;
  wardName: string;
  requsitionNumber: number;
  requsitionedBy: string;
  requsitionDate: Date;
  receivedBy: string;
  dateReceived: Date;
  itemdrugnumber: number;

  docid: string = this.randomRequsitionNumber();
  id: string;

  isVisibleCreateRequisition: boolean = true;
  isVisibleUpdateRequisition: boolean = false;

  requisitionCol: AngularFirestoreCollection<any[]>;
  requisitions: Observable<any[]>;

  constructor(public db: AngularFirestore) { 
    db.firestore.settings({ timestampsInSnapshots: true});
  }

  randomRequsitionNumber() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  onSubmit6(){
    this.db.collection('Requisitions').doc(this.docid).set({
      'RequsitionNumber': this.docid,
      'WardNumber': this.ward,
      'WardName': this.wardName,
      'RequsitionedBy': this.requsitionedBy,
      'RequsitionDate': this.requsitionDate,
      'ReceivedBy': this.receivedBy,
      'DateReceived': this.dateReceived,
      'ItemDrugNumber': this.itemdrugnumber
    });
  }

  onEdit4(id, ward, wardName, requsitionedBy, requsitionDate, receivedBy, dateReceived, itemdrugnumber){
    this.id = id;
    this.ward = ward;
    this.wardName = wardName;
    this.requsitionedBy = requsitionedBy;
    this.requsitionDate = requsitionDate;
    this.receivedBy = receivedBy;
    this.dateReceived = dateReceived;
    this.itemdrugnumber = itemdrugnumber;

    this.isVisibleCreateRequisition = false;
    this.isVisibleUpdateRequisition = true;
  }

  onUpdate4(id){
  this.requisitionCol.doc(id).update({
    'WardNumber': this.ward,
    'WardName': this.wardName,
    'RequsitionedBy': this.requsitionedBy,
    'RequsitionDate': this.requsitionDate,
    'ReceivedBy': this.receivedBy,
    'DateReceived': this.dateReceived,
    'ItemDrugNumber': this.itemdrugnumber
  })
  }

  ngOnInit() {
    this.requisitionCol = this.db.collection('Requisitions');
    this.requisitions = this.requisitionCol.valueChanges();
  }

}
