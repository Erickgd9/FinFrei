import  prompt  from "prompt-sync";
let ler = prompt()


import { sacar,depositar, simulador, saldo  } from "./financeiro.js";
import { blue } from "./exibição.js";
 

function menuzin () {
console.log(blue, `
1. Depositar
2. Sacar
3. Exibir seu saldo
4. Simulador de Investimento
0. Sair`);

  let r = ler();
  return r
}

export { menuzin } ;