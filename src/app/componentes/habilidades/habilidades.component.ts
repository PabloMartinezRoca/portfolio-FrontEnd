import { Component, Input, OnInit } from '@angular/core';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

declare var viewSeccionHabilidades: any;

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  habilidades: any = {};
  @Input() valor: String = '';

  constructor(private datosHabilidades: HabilidadesService) {}

  ngOnInit(): void {
    this.datosHabilidades.obtenerDatos().subscribe((data) => {
      this.habilidades = data.habilidades;

      /* chequea cuando la sección está visible para activar la animación */
      new viewSeccionHabilidades();
    });
  }
}
