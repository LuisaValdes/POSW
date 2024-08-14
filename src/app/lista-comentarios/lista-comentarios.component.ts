import { Component } from '@angular/core';
import { Comentarios } from '../modelos/comentarios';
import { ConsumoAppiService } from '../services/consumo-appi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-comentarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-comentarios.component.html',
  styleUrl: './lista-comentarios.component.css'
})
export class ListaComentariosComponent {

  Comentarios : Comentarios[] = []; 

  constructor(private servicioApi: ConsumoAppiService) { 
  }

  ngOnInit(): void {
    this.getlistadocomentarios();

  }

  ngOnDestroy(): void {

  }

  getlistadocomentarios() {
    this.servicioApi.getListadocomentarios().subscribe(
      datos =>{
        this.Comentarios = datos;
      }
    ); 

  }
}
