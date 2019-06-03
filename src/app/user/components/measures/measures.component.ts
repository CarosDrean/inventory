import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  agregar(medida) {}

  limpiar() {}

  editar(categoria) {}

}
