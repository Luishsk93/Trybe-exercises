// 4- Depois, faça uma pirâmide com n asteriscos de base: 
// n = 5

//   *
//  ***
// *****

let n = 5;
let asterisco = "";
let espaço= " ";
let passo = " ";
let lista_provisoria = [];
let lista_final = [];

for (i = 0; i < n; i += 1){
    asterisco += "*"
    if (i % 2 == 0){
        lista_provisoria.push(asterisco);
    }
}
let reverse = lista_provisoria.reverse();

for (i = 0; i < lista_provisoria.length; i += 1){
    if (i == 0){
        lista_final.push(lista_provisoria[i]);
    }

    else{
        lista_final.push(passo + lista_provisoria[i]);
        passo = passo + espaço;
    }
}

for (item of lista_final.reverse()){
    console.log(item);
}