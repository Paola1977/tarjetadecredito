var tarjeta = prompt("Ingrese Número de Tarjeta a Validar: "); //solicita ingreso del número de tarjeta a validar
isValidCard(tarjeta);

function isValidCard(tarjeta)//funcion para validar numeros de tarjetas
{
      var c = tarjeta;//el numero de la tarjeta se le asigna a una variable llamada "c"
      var cl = parseInt(c.substr(c.length - 1));//se convierte el numero en entero
      var c = c.slice(0,-1)
      var c = c.split("").reverse().join("");//reversar los digitos de la tarjeta
      var c = c.split("");
      var a = 2;
      var cm = [];
      for (var i = 0; i < c.length; i++)
      {
            if (a % 2 == 0)
            {
              var t = c[i]*2;
                  if (t > 9)
                  {
                    var t = (t -9);
                  }
                  cm.push(t);
                  }
                  else
                  {
                     cm.push(parseInt(c[i]));
                  }
          a++;
      }
      var f = 0;
      for (var i = 0; i < cm.length; i++)
      {
            f += cm[i];
      }
      f = f + cl;
      if (f % 10 == 0)
      {
          alert("NUMERO DE TARJETA VALIDA");
      }
      else
      {
          alert("NUMERO DE TARJETA NO VALIDA");
      }
}
