import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentCardPageRoutingModule } from './student-card-routing.module';

import { StudentCardPage } from './student-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentCardPageRoutingModule
  ],
  declarations: [StudentCardPage]
})
export class StudentCardPageModule {}
