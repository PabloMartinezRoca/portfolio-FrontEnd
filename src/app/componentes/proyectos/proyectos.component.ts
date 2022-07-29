import { Component, Input, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: any = {};

  constructor(private datosProyectos: ProyectosService) {}

  ngOnInit(): void {
    this.datosProyectos.obtenerDatos().subscribe((data) => {
      this.proyectos = data.proyectos;
    });
  }

}

