const botonEnviar = document.getElementById("enviar-nota");

botonEnviar.addEventListener("click",()=>{
  let resultado,mensaje;
  try{
  pevRes = parseInt(document.getElementById("nota").value) ;
  if(isNaN(pevRes)){
    throw "Gracioso";
  }
  mensaje = definirMensaje(pevRes);
  resultado = verificarAprobado(8,5,pevRes)
  }catch(e){
    resultado = "ERES UN GRACIOSO"
    mensaje = "TE HE PILLADO"
  }
  abrirModal(resultado,mensaje)
})

const definirMensaje = (pr)=>{
  let resultado;
  switch (pr) {
    case 1:resultado ="No seas cabron";
      
      break;
      case 2:resultado ="No seas bago";
      
      break;
      case 3:resultado ="No seas flojo";
      
      break;
      case 4:resultado ="necesitas mejorar";
      
      break;
      case 5:resultado ="por los pelos";
      
      break;
      case 6:resultado ="bien";
      
      break;
      case 7:resultado ="aprobado not";
      
      break;
      case 8:resultado ="Notable alto";
      
      break;
      case 9:resultado ="sobresaliente";
      
      break;
      case 10:resultado ="matricula";
      
      break;
  
    default:resultado = null;
      
  }
  return resultado
}
const verificarAprobado = (nota1,nota2,pevRes)=>{

  promedio = (nota1 + nota2 + pevRes)/3;

  if(promedio >= 5){
    let resultado = "<span class='green'>Aprobado</span>";
    return resultado
  }else{
    let resultado = "<span class='red'>Suspenso</span>";
    return resultado;
  }
}

const abrirModal = (res,msj)=>{
document.querySelector(".resultado").innerHTML = res;
document.querySelector(".mensaje").innerHTML = msj;
let modal = document.querySelector(".modal-background");
modal.style.display = "flex";
modal.style.animation = "aparecer 1s forwards"
}