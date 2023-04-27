function calcularPromedio() {
    var nota1 = parseInt(document.getElementById("nota1").value);
    var nota2 = parseInt(document.getElementById("nota2").value);
    var nota3 = parseInt(document.getElementById("nota3").value);
    var promedio = 0;
    var contador = 0;
    for (var i = 1; i <= 3; i++) {
      if (isNaN(eval("nota" + i))) {
        document.getElementById("resultado").innerHTML = "Ingrese números válidos";
        return;
      } else if (eval("nota" + i) < 0 || eval("nota" + i) > 10) {
        document.getElementById("resultado").innerHTML = "Las notas deben estar entre 0 y 10";
        return;
      } else {
        promedio += eval("nota" + i);
        contador++;
      }
    }
    promedio /= contador;
    document.getElementById("resultado").innerHTML = promedio;
  }