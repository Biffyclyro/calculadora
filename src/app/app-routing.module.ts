import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalculadoraComponent} from './calculadora/calculadora.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {GatosComponent} from './gatos/gatos.component';


const routes: Routes = [
  {path: '', component: CalculadoraComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'gatos', component: GatosComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
