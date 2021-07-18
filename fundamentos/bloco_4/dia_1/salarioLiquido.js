let bruto = 3000.00;
let INSS = 0;
let IR = 0;

if (bruto <= 1556.94){
    INSS = 0.08 * bruto;
}

else if (bruto >= 1556.94 && bruto <= 2594.92){
    INSS = 0.09 * bruto;
}

else if (bruto >= 2594.93 && bruto <= 5189.82){
    INSS = 0.11 * bruto;
}

else{
    INSS = 570.88;
}

let base = bruto - INSS;
let a_IR = 0;
let deducao = 0;

if (base <= 1903.98){
    a_IR = 0;
    deducao = 0;
}

else if (base >= 1903.99 && base <= 2826.65){
    a_IR = 0.075 * base;
    deducao = 142.80;
}

else if (base >= 2826.66 && base <= 3751.05){
    a_IR = 0.15 * base;
    deducao = 354.80;
}

else if (base >= 3751.06 && base <= 4664.68){
    a_IR = 0.225 * base;
    deducao = 636.13;
}

else{
    a_IR = 0.275;
    deducao = 869.36;
}

let liquido = base - a_IR + deducao;
console.log(liquido);