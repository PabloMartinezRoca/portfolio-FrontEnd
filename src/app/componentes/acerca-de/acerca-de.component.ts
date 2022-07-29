import { Component, Input, OnInit } from '@angular/core';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  acercaDe: any = {};

  constructor(private datosAcercaDe: AcercaDeService) {}

  ngOnInit(): void {
    this.datosAcercaDe.obtenerDatos().subscribe((data) => {
      this.acercaDe = data.acercaDe;
    });
  }

}