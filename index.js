let user = prompt("¡Crea un usuario!");
alert("¡Bienvenido " + user + "! ");
let password = prompt("¡Es hora de crear una contraseña!");
alert("Usuario creado con éxito. ¿Deseas iniciar sesión?");
let usuario1 = prompt("¿Cuál es tu usuario?");
let password1 = prompt("¿Cuál es tu contraseña");
let intentos = 2;
while((usuario1 && password1 != password && user)) {
    intentos--;
    alert("¡Contraseña o usuario erroneo! Te quedan " + intentos + " intentos." );
    usuario1 = parseInt(prompt("¿Cuál es tu usuario?"));
    password1 = parseInt(prompt("¿Cuál es tu contraseña?"));
    if(intentos == 1){
        alert("¡Ya no tienes intentos!")
        break;
    }

    //Aquí no supe como hacer para cuando el usuario no digite los datos correctos sacarlo de la pagina :C
}
let consigna = prompt("¿Deseas calcular el promedio por edad de tus alumnos? (¿si o no?)");
if (consigna == "si") {
  let cantAlumnos = Number(prompt("¿Cuántos alumnos hay?"));
  let edadAlumnos;
  let suma = 0;
  for (i = 1; i <= cantAlumnos; i++) {
    edadAlumnos = Number(prompt("Edad del alumno número" + i + "."));
    suma = suma + edadAlumnos;
  }
  alert("El promedio de edades de " + cantAlumnos + " alumnos es: " + suma / cantAlumnos);
} else(alert("¡Adiós!"));
