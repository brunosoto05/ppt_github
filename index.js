let mensaje = document.getElementById("mensaje");
let piedra = 0
let papel = 1
let tijera = 2
let opciones = ["piedra", "papel", "tijera"];
let partidas = window.localStorage.setItem("partidas", []);
let arrayPartidas = []

function juega(opcionUsu){
  let opcionCpu = Math.floor(Math.random() *3);

  if(arrayPartidas.length >= 5){
    arrayPartidas.shift();
  }

  if(opcionCpu === opcionUsu){
    arrayPartidas.push(`Empataste, la computadora jugo ${opciones[opcionCpu]}`)
    mensaje.innerHTML = `Empataste, la computadora jugo ${opciones[opcionCpu]}`
  } else if(opcionCpu != opcionUsu){
    if(opcionCpu === 0 && opcionUsu === 2 || opcionCpu === 1 && opcionUsu === 0 || opcionCpu === 2 && opcionUsu === 1){
      arrayPartidas.push(`Perdiste :(, la computadora jugo ${opciones[opcionCpu]}`)
      mensaje.innerHTML = `Perdiste :(, la computadora jugo ${opciones[opcionCpu]}`
    } else{
      arrayPartidas.push(`Ganaste!!, la computadora jugo ${opciones[opcionCpu]}`)
      mensaje.innerHTML = `Ganaste!!, la computadora jugo ${opciones[opcionCpu]}`
    }
  }
  mostrarResultado();
}

function mostrarResultado(){
  let historial = document.getElementById("partidas");
  historial.innerHTML = ""
  arrayPartidas.map((partida) =>{
    let resultado = document.createElement("p");
    resultado.innerHTML = partida;
    historial.appendChild(resultado)
  }) 
}
