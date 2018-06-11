import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsListComponent } from './components/programs-list/programs-list.component';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { ProgramActivitiesComponent } from './components/program-activities/program-activities.component';
import { ProgramsGuard } from './guards/programs.guard';
import { ActivitiesGuard } from './guards/activities.guard';

const routes: Routes = [
  {
    path: 'programs',
    canActivate: [ProgramsGuard],
    component: ProgramsListComponent
  },
  {
    path: 'programs/:programId',
    canActivate: [ProgramsGuard, ActivitiesGuard],
    component: ProgramActivitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
