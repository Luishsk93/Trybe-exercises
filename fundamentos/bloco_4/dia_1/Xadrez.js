var name = "bispo";
var name2 = name.toLowerCase();
switch(name2){
  case "peão":
      console.log("frente");
      break;
  case "cavalo":
      console.log("L");
      break;
  case "bispo":
      console.log("diagonal");
      break;
  case "torre":
      console.log("reto");
      break;
  case "dama":
      console.log("livre");
      break;
  case "rei":
      console.log("livre")
      break;
  default:
      console.log("Peça inválida")
}