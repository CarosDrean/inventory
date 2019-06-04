import { Component, OnInit } from '@angular/core';
import { MeasureService } from 'src/app/services/measure.service';
import { Measure } from 'src/app/interfaces/measure';

@Component({
  selector: 'app-measures',
  templateUrl: './measures.component.html',
  styles: []
})
export class MeasuresComponent implements OnInit {

  caso: string;

  constructor(public ms: MeasureService) {
  }

  ngOnInit() {
  }

}
