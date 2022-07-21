import { Component } from '@angular/core';

declare var viewSeccionHabilidades: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio • Pablo Martínez Roca';

  ngOnInit(): void {  
    /* chequea cuando la sección está visible para activar la animación */
    new viewSeccionHabilidades();
  }
}
