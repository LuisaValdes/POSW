import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComentariosComponent } from './lista-comentarios.component';

describe('ListaComentariosComponent', () => {
  let component: ListaComentariosComponent;
  let fixture: ComponentFixture<ListaComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaComentariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
