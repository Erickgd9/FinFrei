import prompt from "prompt-sync";
let ler = prompt();

import { sacar,depositar, simulador, saldo  } from "./financeiro.js";
import { menuzin } from "./menu.js";


console.log("Insira o saldo");
let s = Number(ler());

while (true) {
  let r = menuzin();

  if ( r == 1 ){
    s = depositar(s);
    
  }
  if ( r == 2 ){
    s = sacar(s);
    
  }
  if ( r == 3 ){
    saldo(s);
    
  }
  if ( r == 4 ){
    console.log('Insira o Juros');
    let n1 = Number(ler());
    console.log('Insira o Tempo ( Em Meses )');
    let n2 = Number(ler());
    console.log('Insira o valor inicial');
    let n3 = Number(ler());
    let x = simulador(n1,n2,n3);
    console.log(`O lucro foi de R$${x}`);
    
  }
  if ( r == 0 ) {
    break;
    
  }

}