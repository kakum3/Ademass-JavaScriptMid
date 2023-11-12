const getInfo = async () => {
  let aprobados =document.querySelector(".num-aprobados");
  let suspensos =document.querySelector(".num-suspensos");
  try {
    resultado = await axios("informacion.txt");

  aprobados.innerHTML =
      resultado.data.aprobados;
    suspensos.innerHTML =
      resultado.data.suspensos;
  } catch (error) {
    aprobados.innerHTML =
    "La API fallo";
  suspensos.innerHTML =
    "La API fallo";
  }
};
document.getElementById("getInfo").addEventListener("click", getInfo);
