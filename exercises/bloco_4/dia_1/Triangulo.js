a = 30;
b = 90;
c = 60;

if (a + b + c == 180){
    console.log(true);
}
else{
    if (a < 0 || b < 0 || c < 0){
        console.log("Existe um angulo invalido")
    }
    else{
        console.log(false)
    }
}