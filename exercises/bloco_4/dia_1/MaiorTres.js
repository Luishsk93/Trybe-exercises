let a = 3;
let b = 7;
let c = 4;
maior = a;
if ((a > b || a == b) && (a > c || a == c)){
    console.log(a)
}
else if ((b > a || a == b) && (b > c || b == c)){
    console.log(b)
}
else{
    console.log(c)
}