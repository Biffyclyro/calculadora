import { Component, OnInit } from '@angular/core';
import {split} from 'ts-node';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  resposta = '';
  operador: string;
  ngOnInit() {
  }

  insereNumero(valor: number) {

      this.resposta += String(valor);
  }

  insereOperador(operador: string) {
    this.operador = operador;
    this.resposta += operador;
  }

  limpar() {
    this.resposta = '';
  }

  calcular() {
    switch (this.operador) {
      case '+': {
        this.resposta = String(Number(this.resposta.split('+')[0]) + Number(this.resposta.split('+')[1]));
        break;
      }
      case '-': {
        this.resposta = String(Number(this.resposta.split('-')[0]) - Number(this.resposta.split('-')[1]));
        break;
      }case '*': {
        this.resposta = String(Number(this.resposta.split('*')[0]) * Number(this.resposta.split('*')[1]));
        break;
      }case '/': {
        this.resposta = String(Number(this.resposta.split('/')[0]) / Number(this.resposta.split('/')[1]));
        break;
      }

    }
  }
}
