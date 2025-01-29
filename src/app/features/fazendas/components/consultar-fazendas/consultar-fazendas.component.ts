import { Component, OnInit } from '@angular/core';
import { ConsultaFazendaContext } from './consultar-fazendas.context';

@Component({
  selector: 'app-consutar-fazendas',
  standalone: false,
  
  templateUrl: './consultar-fazendas.component.html',
  styleUrl: './consultar-fazendas.component.scss',
  providers: [ConsultaFazendaContext]
})
export class ConsultarFazendasComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
