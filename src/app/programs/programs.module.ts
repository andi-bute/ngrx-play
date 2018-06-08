import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsListComponent } from './programs-list/programs-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProgramsRoutingModule
  ],
  declarations: [ProgramsListComponent]
})
export class ProgramsModule { }
