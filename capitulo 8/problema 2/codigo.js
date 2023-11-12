 let alumnos =[
  {
    nombre: "Jesus Espartero",
    email: "kakum_3@hotmail.com",
    materia:"Matematicas"
  },
  {
    nombre: "Jaime Roldan",
    email: "jaime@hotmail.com",
    materia:"Fisica"
  },
  {
    nombre: "Maria Perez",
    email: "maria@hotmail.com",
    materia:"Logica"
  },
  {
    nombre: "Pepe Pepon",
    email: "peponhotmail.com",
    materia:"Lengua"
  },
  {
    nombre: "Cofla Xd",
    email: "coflahotmail.com",
    materia:"Recreo"
  }
];

const boton = document.querySelector(".boton-confirmar");
const contenedor =document.querySelector(".grid-container");
let htmlCode =  " " ;

for(alumno in alumnos){
  let datos =alumnos[alumno];
  let nombre= datos["nombre"];
  let email= datos["email"];
  let materia= datos["materia"];

 htmlCode += `
  <div class="grid-item nombre">${nombre}</div>
  <div class="grid-item email">${email}</div>
  <div class="grid-item matria">${materia}</div>
  <div class="grid-item semana">
    <select class="semana-elegida">
      <option value="Semana 1">Semana 1</option>
      <option value="Semana 2">Semana 2</option>
    </select>
  </div>
  
  `;

}
contenedor.innerHTML =  htmlCode;

boton.addEventListener("click",()=>{
let confirmar =confirm("Quieres confirmar las mesas?");
if(confirmar){
  
  let elementos = document.querySelectorAll(".semana");
  let semanasElegidas = document.querySelectorAll(".semana-elegida");

  for (elemento in elementos){
    semana = elementos[elemento];
    semana.innerHTML= semanasElegidas[elemento].value ;
  }

}
})