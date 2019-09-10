import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {GatosService} from '../services/gatos.service';
import {Gatos} from '../model/gatos';
import {Tempo} from '../model/tempo';
import {TempoService} from '../services/tempo.service';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.css']
})
export class GatosComponent implements OnInit {

  gato = new Gatos();
  tempo = new Tempo();

  constructor(private gatosService: GatosService, private tempoService: TempoService) { }

  ngOnInit() {
    this.listar();
    this.listaTempo();
    console.log(this.tempo.main.TEMP_MAX);
  }

  listar() {
    this.gatosService.getAll().subscribe(res => this.gato = res);
  }

  listaTempo() {
   this.tempoService.getTempo().subscribe(res => this.tempo = res);
  }


}
