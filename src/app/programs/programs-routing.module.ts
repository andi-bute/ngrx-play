import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsListComponent } from './programs-list/programs-list.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { ProgramActivitiesComponent } from './program-activities/program-activities.component';

const routes: Routes = [
  {
    path: 'programs',
    component: ProgramsListComponent
  },
  {
    path: 'programs/:programId',
    component: ProgramActivitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
