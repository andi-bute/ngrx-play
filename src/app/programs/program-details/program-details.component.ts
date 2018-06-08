import { Component, OnInit, Input } from '@angular/core';
import { Program } from '../models/program.model';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {
  @Input('program')
  public program: Program;

  constructor() { }

  ngOnInit() {
    console.log(this.program);
  }

}
