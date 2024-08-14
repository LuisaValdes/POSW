import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentarios } from '../modelos/comentarios';

@Injectable({
  providedIn: 'root'
})
export class ConsumoAppiService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http : HttpClient) 
  {
  }
  getListadocomentarios() : Observable<Comentarios[]>{
    return this.http.get<Comentarios[]>(this.apiUrl);
  }

}
