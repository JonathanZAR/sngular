import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  valor? :number;
  @Output() valorEnviado = new EventEmitter<number>();

  openAlert : boolean = false;

  enviarValor() {
    this.valorEnviado.emit(this.valor);
    this.openAlert = true;
  }

  reset(input: HTMLInputElement){
    this.openAlert = false;
    input.value = '';
  }
}
