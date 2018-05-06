import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { WardComponent } from './ward/ward.component';
import { PatientsComponent } from './patients/patients.component';
import { GetUpdatePatientsComponent } from './get-update-patients/get-update-patients.component';

import { InpatientsComponent } from './inpatients/inpatients.component';
import { SearchForStaffComponent } from './search-for-staff/search-for-staff.component';
import { GetstaffinwardComponent } from './getstaffinward/getstaffinward.component';
<<<<<<< HEAD
import { CreateMaintainOutpatientsComponent } from './create-maintain-outpatients/create-maintain-outpatients.component';
=======
import { GetinpatientinwardComponent } from './getinpatientinward/getinpatientinward.component';
>>>>>>> 8a9d4284cfede88dd3e41532c59781970f1eae88


@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    WardComponent,
    PatientsComponent,
    GetUpdatePatientsComponent,
    InpatientsComponent,
    SearchForStaffComponent,
    GetstaffinwardComponent,
<<<<<<< HEAD
    CreateMaintainOutpatientsComponent
=======
    GetinpatientinwardComponent
>>>>>>> 8a9d4284cfede88dd3e41532c59781970f1eae88

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
