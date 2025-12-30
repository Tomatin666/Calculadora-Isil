/* Cree un formulario que permita ingresar 4 notas: Parcial(20%), Final(30%), Trabajos(25%), Prácticas(25%) y calcule el promedio. Debe mostrar si el alumno está Aprobado o Desaprobado (mínimo 13). Las notas deben ser validadas (no nulas y estar comprendidas entre 0 y 20). El promedio tendrá como máximo 2 decimales. */
function calcular() {
  let pa1, pa2, pa3, pa4, evaIn, prom, msj, paProm, evaProm;

  /* Asigna las variables del formulario */
  pa1 = document.getElementById("pa1").value;
  pa2 = document.getElementById("pa2").value;
  pa3 = document.getElementById("pa3").value;
  pa4 = document.getElementById("pa4").value;
  evaIn = document.getElementById("evaIn").value;

  /* Validar */
  if (isNaN(pa1) || isNaN(pa2) || isNaN(pa3) || isNaN(pa4) || isNaN(evaIn)) {
    alert("Ingrese solo números 😡");
    limpiar();
    return;
  }
  if (pa1 === "" || pa2 === "" || pa3 === "" || pa4 === "" || evaIn === "") {
    alert("Rellena todos los campos 🙈");
    limpiar();
    return;
  }

  /* Los convierte a números */
  let pa1Num = Number(pa1);
  let pa2Num = Number(pa2);
  let pa3Num = Number(pa3);
  let pa4Num = Number(pa4);
  let evaInNum = Number(evaIn);

  if (
    pa1Num > 20 ||
    pa2Num > 20 ||
    pa3Num > 20 ||
    pa4Num > 20 ||
    evaInNum > 20 ||
    pa1Num < 0 ||
    pa2Num < 0 ||
    pa3Num < 0 ||
    pa4Num < 0 ||
    evaInNum < 0
  ) {
    alert("Las notas deben ser entre 0 y 20 😡");
    limpiar();
    return;
  }

  /* Convierte las notas a porcentajes */
  paProm = ((pa1Num + pa2Num + pa3Num + pa4Num) / 4) * 0.6;
  evaProm = evaInNum * 0.4;

  prom = paProm + evaProm;

  let promNum = parseFloat(prom.toFixed(2));

  function mensaje() {
    if (promNum >= 13) {
      msj = `Promedio: ${promNum}<br> Promedio redondeado: ${Math.round(
        promNum
      )} <br> Aprobado 🤓☝️`;
    } else {
      msj = `Promedio: ${promNum}<br> Promedio redondeado: ${Math.round(
        promNum
      )} <br> Desaprobado 💀`;
    }
    return msj;
  }
  mensaje();

  document.getElementById("resul").innerHTML = msj;
}

function limpiar() {
  /* Deja vacía las cajas del formulario */
  document.getElementById("pa1").value = "";
  document.getElementById("pa2").value = "";
  document.getElementById("pa3").value = "";
  document.getElementById("pa4").value = "";
  document.getElementById("evaIn").value = "";
  document.getElementById("resul").textContent = "";
}
