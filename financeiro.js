import  prompt  from "prompt-sync";
let ler = prompt()

import { green, yellow } from "./exibição.js";

function depositar (saldo){
    do {
        console.log(yellow,'Quanto será Depositado?');
        let x = ler();
        
        if ( x == 'C' ) {
            break

        }
        else if ( x != 'C' ) {
            x = Number(x);
            saldo += x;
        }
    } while ( saldo <= 0 );
    
    return saldo
}

function sacar (saldo) {
    do {
        console.log(yellow,'Quanto sera Sacado?');
        let x = ler();
        
        if ( x == 'C' ) {
            break

        }
        else if ( x != 'C' ) {
            x = Number(x);
            saldo -= x;

        }
        
    } while ( saldo <= 0 ) 
    
    return saldo
}

function saldo (saldo){
    console.log(green, `\nseu saldo atual é de R$${saldo}`);

}

function simulador (Juros,Tempo,CapitalI) {
    let lucro = 0;
    Juros = ( ( Juros / 100 ) + 1 );
    let juros1 = Juros;

    for ( let i = 1; i < Tempo; i++ ) {
        Juros *= juros1;

        
    }
    lucro = CapitalI * Juros;
    return lucro.toFixed(2);
}

export { depositar, sacar, saldo, simulador };