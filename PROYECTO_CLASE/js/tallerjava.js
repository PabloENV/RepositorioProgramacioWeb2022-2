function e1(){
	var nombre = prompt("Como te llamas?");
      var edad = prompt("Cuantos años tienes?");
      var edad1 = parseInt(edad) + 1;

      if (!isNaN(edad)) {
        alert(
          "Hola " +
            nombre +
            " tienes " +
            edad +
            " años y el año que viene tendrás " +
            edad1 +
            " años"
        );
      }
}
//-------------------------------------------------------------------------
function e2(){
    var figura = parseInt(
        prompt(
          "Ingrese la figura que desea calcular el area:\n 1. Triangulo\n  2. Rectangulo\n  3. Circulo  "
        )
      );

      switch (figura) {
        case 1:
          var base = parseFloat(prompt("Ingrese la base del triangulo (cm)"));
          var altura = parseFloat(
            prompt("Ingrese la altura del triangulo (cm)")
          );

          var area = (base * altura) / 2;

          alert("El area del triangulo es: "+ area + " cm^2");
          break;

        case 2:
          var base = parseFloat(prompt("Ingrese la base del Rectangulo (cm)"));
          var altura = parseFloat(
            prompt("Ingrese la altura del Rectangulo (cm)")
          );

          var area = base * altura;

          alert("El area del Rectangulo es: " + area + " cm^2");
          break;

        case 3:
          var radio = parseFloat(prompt("Ingrese el radio del circulo (cm)"));

          var area = Math.PI * Math.pow(radio, 2);

          alert("El area del circulo es: "+ area+ " cm^2");
          break;
      }

}
//-----------------------------------------------------------
function e3(){
  let n = prompt("Ingrese el limite de numeros");
  let text = "";
  /* Para imprimir un dato se puede usar console.log(dato) */
  for (var i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      text += i + " es par\n";
    } else {
      text += i + " es impar\n";
    }
  }
  alert(text);
}

//----------------------------------------------------------------
function e4(){
  let p = parseInt(prompt("Ingrese el numero que quiere comprobar"));
  if (p > 1) {
    let check = true;
    var i = 0;
    for (i = 2; i < p; i++) {
      if (Number.isInteger(p) && p % i == 0) {
        check = false;
      }
    }
    if (check == true) {
      alert(p + " es primo");
    } else {
      alert(p + " no es primo");
    }
  } else {
    alert(p + " ya es primo");
  }
}

//-----------------------------------------------------------------------
function e5(){
  let numero = parseInt(prompt("Ingrese el numero que quiere comprobar"));
      let num = 1;
      if (numero > 0) {
        for (var i = 1; i <= numero; i++) {
          num *= i;
        }
        alert("El factorial de " + numero + " es " + num);
      } else {
        alert("El factorial de " + numero + " es " + 1);
      }
}

//-------------------------------------------------------------------------
function e6(){
  let numeroIntroducido=0;
     suma = 0;
     numeroDeElementos = 0;
    
    do {
      numeroIntroducido = parseInt(prompt("Ingrese un numero"));
      suma += numeroIntroducido;
      numeroDeElementos++;
    } while (suma <= 49);
    
    alert("Ha introducido un total de " + numeroDeElementos + " números.");
    alert("La suma total es " + suma + ".");

}

//---------------------------------------------------------------------------
function e7(){
  let rand = [1, 1, 1, 1, 1];
  let randx = rand.map(
    (rand) => rand * Math.floor(Math.random() * (10 - 1) + 1)
  );
  let array1 = [1, 2, 3, 4, 5];
  let array2 = [];
  let array3 = [];
  let array1m = [];
  for (var j = 0; j < array1.length; j++) {
    array1m[j] = array1[j] * randx[j];
    alert(
      "La multiplicación que se produce con" +
        array1[j] +
        "x" +
        randx[j] +
        " es " +
        array1m[j]
    );
  }
  alert("El array completo es: " + array1m);
  let c = 0,
    cx = 0;
  for (var i = 0; i < array1m.length; i++) {
    if (array1m[i] % 2 == 0) {
      array2[c] = array1m[i];
      c++;
    } else {
      array3[cx] = array1m[i];
      cx++;
    }
  }
  alert("El array de pares es: " + array2);
  alert("El array de impares es: " + array3);

}
//-------------------------------------------------------
function e8(){
  const letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
  ];

  var ced = prompt("Ingrese su DNI (cedula)");
  let numer = parseInt(ced);
  let pos = "";
  if (numer >= 0 && ced.length <= 8) {
    var res = numer % 23;
    pos = letras[res];
    alert("Te corresponde la letra: " + pos);
  } else {
    alert(
      "El numero no puede ser menor que cero ni puede tener mas de 8 digitos"
    );
  }

}

//----------------------------------------------------
function e9(){
  var nombre = prompt("Ingresa una palabra");
  const vocal = nombre.match(/[aeiou]/gi).length;
  const consonante = nombre.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
  const longitud = nombre.match(/[abcdefghijklmnopqrstuvwxyz]/gi).length;
  console.log(
    "Vocales: " +
      vocal +
      "\nConsonantes: " +
      consonante +
      "\nlongitud: " +
      longitud
  );
  alert(
    "Vocales: " +
      vocal +
      "\nConsonantes: " +
      consonante +
      "\nlongitud: " +
      longitud
  );

}

//--------------------------------------------------------
function e10(){
  let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
      let colorkey = prompt("Escribe un color");
      var color = "";
      var i = 0;

      for (var i = 0; i < colores.length; i++) {
        if (colores[i] == colorkey) {
          color = "si";
          break;
        } else {
          color = "no";
        }
      }
      if (color == "si") {
        alert("El color SI se encuentra en el array");
      } else {
        alert("El color NO se encuentra en el array");
      }
}