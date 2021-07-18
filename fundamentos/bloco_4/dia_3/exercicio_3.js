// 3- Agora inverta o lado do triângulo. Por exemplo:
// n = 5

//     *
//    **
//   ***
//  ****
// *****

let n = 5;
let asterisco = "";
let espaço= " ";
let passo = " ";

for (i = 1; i <= n; i += 1){
    espaço= " ";
    for (j = 1; j <= (n - i); j += 1){
        espaço = espaço + passo;
    }
    asterisco = asterisco + "*";
    console.log(espaço + asterisco);
}