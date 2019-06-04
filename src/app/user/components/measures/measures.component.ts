import { Component, OnInit } from '@angular/core';
import { MeasureService } from 'src/app/services/measure.service';
import { Measure } from 'src/app/interfaces/measure';

@Component({
  selector: 'app-measures',
  templateUrl: './measures.component.html',
  styles: []
})
export class MeasuresComponent implements OnInit {

  caso;
  medida = {
    nombre: '',
    denominacion: ''
  };

  measure: Measure;

  constructor(public ms: MeasureService) {
    ms.getItems('oscar').subscribe((res) => {
      console.log(res.measures);
    });

    this.measure = {
      name: 'Hogar',
      denomination: 'HG'
    };

    // ms.createItem(this.measure).subscribe((res) => {
    //   console.log(res);
    // });
  }

  ngOnInit() {
  }

  agregar(medida) {}

  limpiar() {}

  editar(categoria) {}

}
