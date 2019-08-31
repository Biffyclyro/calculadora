import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../model/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario = new Usuario();
  constructor() {

  }



  ngOnInit() {
    this.usuario.telefone = 1234;
    this.usuario.email = 'joao';
  }
  atualizarDados() {
    console.log(this.usuario.email);
  }

}
