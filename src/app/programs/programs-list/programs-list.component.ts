import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../services/programs.service';
import { Program } from '../models/program.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html'
})
export class ProgramsListComponent implements OnInit {
  programs$: Observable<Program[]>;

  constructor(private store: Store<fromStore.ProgramsState>) { }

  ngOnInit() {
    this.programs$ = this.store.select(fromStore.getAllPrograms);
    this.store.dispatch(new fromStore.LoadPrograms());
  }

}
