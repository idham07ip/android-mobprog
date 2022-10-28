import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentCardPage } from './student-card.page';

const routes: Routes = [
  {
    path: '',
    component: StudentCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentCardPageRoutingModule {}
