window.onload = function () {
  document.getElementById("demo").innerHTML = 5 + 6;
  // document.write("NUNCA usar documento.write DESPUES que el documento ha terminado de cargar. Ya que esto eliminara y sobreescribirá todo el contenido previo del documento.");
};

function miFuncion() {
  let a, b, c, d, e;
  a = 100;
  b = 5;
  c = 3;
  d = " dolares";
  e = "$";

  // De esta manera concatenamos
  alert(a + b + c);

  document.getElementById("resultado1").innerHTML =
    "tambien podemos hacer operaciones de suma, resta, multiplicacion y division. ";
  document.getElementById("resultado1").innerHTML += a + b * c;

  document.getElementById("resultado2").innerHTML =
    " Podemos concatenar numeros y string. ";
  document.getElementById("resultado2").innerHTML += a + b + c + d + e;

  document.getElementById("resultado3").innerHTML =
    "Pero si en la concatenacion hay primero un string, todo sera tratado como string. incluso los numeros. ";
  document.getElementById("resultado3").innerHTML += e + a + b + c + d;

  document.getElementById("resultado4").innerHTML =
    "Para evitar eso podemos agrupar con parentesis. ";
  document.getElementById("resultado4").innerHTML += e + (a + b + c) + d;
}
