import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent {
  @Input() valor?: number;  
  resultado = 0;
  result = 0;

  ngOnChanges() {
    this.resultado = this.calcular(Number(this.valor));
  }

  calcular(valor: number): number {
    if (valor <= 0) throw new Error("El valor debe ser mayor a cero.");
    //if (n == 0) return n;
    //FIBONACCI
    let a = 0;
    let b = 1;

    for (let i = 0; i < valor; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    let resultadoFibo = a

    //TRIANGULO
    let resultadoTriangulo = ((valor + 1) * ( valor + 2))/2  

    //PRIMOS
    function esPrimo(num: number){
        if (num <= 1) { // Los primos empiezan desde 2
            return false; // No es primo 
          }
          for (let i = 2; i <= Math.sqrt(num); i++) { //verifica los numeros anteriores
            if (num % i === 0) { //si no existe residuo no es primo
              return false; //No es primo
            }
          }
          return true; //Encuentra residuo en los numeros anteriores
    }
    let x = 0, j = 1; //j comienza en el 1 porque los primos empiezan desde el número 2

    while (x < valor) {
        j += 1;
        if (esPrimo(j)) {
            x += 1;
        }
    }
    let resultadoPrimo = j;
    //RESULTADO
    this.result =  -3 * resultadoPrimo - resultadoFibo + 5 * (resultadoTriangulo); 
    return this.result
  }
}
