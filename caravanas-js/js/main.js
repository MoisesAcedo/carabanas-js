//Uso estricto
"use strict";
var recogidaFecha;
var devolucionFecha;
var fechaDevolucionMinima;

(function() {
  
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

//habilitamos boton-reservar
function acepto(){

    console.log("Estoy dentro de acepto");

document.getElementById("boton-reservar").removeAttribute("disabled");

}

function calcular() {
    console.log("Estoy dentro de calcular")


    //Guardamos los valores recogidos del formulario en variables

    var nombre = document.getElementById("nombre-apellidos").value;
    console.log("nombre = " + nombre);
    var dni = document.getElementById("dni").value;
    console.log("dni = " + dni);

    recogidaFecha = document.getElementById("recogida-fecha").value;
    console.log("recogidaFecha = " + recogidaFecha);
    console.log("fechaDevolucionMinima = " + fechaDevolucionMinima);
    

    var recogidaHorario = document.getElementById("recogida-horario").value;
    console.log("recogidaHorario = " + recogidaHorario);

    var caravana = document.getElementById("caravana").value;
    console.log("caravana = " + caravana);

    devolucionFecha = document.getElementById("devolucion-fecha").value;
    console.log("devolucionFecha = " + devolucionFecha);

    var devolucionHorario = document.getElementById("devolucion-horario").value;
    console.log("devolucionHorario = " + devolucionHorario);

    var km = document.getElementById("km").value;
    console.log("km = " + km);

    //Cambiamos formatos a las variables, y realizamos operaciones

    //cogemos dia de la semana, dia de mes, mes y año de las fechas de entrada y salida

    var recogidaFechaMiliseg = new Date(recogidaFecha);
    var recogidaDiaSemana = recogidaFechaMiliseg.getDay();
    switch (recogidaDiaSemana) {
        case 0:

            recogidaDiaSemana = "Domingo"

            break;

        case 1:

            recogidaDiaSemana = "Lunes"

            break;

        case 2:

            recogidaDiaSemana = "Martes"

            break;

        case 3:

            recogidaDiaSemana = "Miercoles"

            break;

        case 4:

            recogidaDiaSemana = "Jueves"

            break;

        case 5:

            recogidaDiaSemana = "Viernes"

            break;

        case 6:

            recogidaDiaSemana = "Sabado"

            break;

    }

    var recogidaDiaMes = recogidaFechaMiliseg.getDate();

    var recogidaMes = recogidaFechaMiliseg.getMonth();
    console.log("recogidaMes" + recogidaMes);

    switch (recogidaMes) {
        case 0:

            recogidaMes = "Enero"

            break;

        case 1:

            recogidaMes = "Febrero"

            break;

        case 2:

            recogidaMes = "Marzo"

            break;

        case 3:

            recogidaMes = "Abril"

            break;

        case 4:

            recogidaMes = "Mayo"

            break;

        case 5:

            recogidaMes = "Junio"

            break;

        case 6:

            recogidaMes = "Julio"

            break;
        case 7:

            recogidaMes = "Agosto"

            break;
        case 8:

            recogidaMes = "Septiembre"

            break;
        case 9:

            recogidaMes = "Octubre"

            break;
        case 10:

            recogidaMes = "Noviembre"

            break;
        case 11:

            recogidaMes = "Diciembre"

            break;

    }

    console.log("recogidaMes" + recogidaMes);

    var recogidaAnio = recogidaFechaMiliseg.getFullYear();



    console.log("recogidaFechaMiliseg = " + recogidaFechaMiliseg);
    recogidaFechaMiliseg = recogidaFechaMiliseg.getTime();
    console.log("recogidaFechaMiliseg = " + recogidaFechaMiliseg);

    var devolucionFechaMiliseg = new Date(devolucionFecha);


    var devolucionDiaSemana = devolucionFechaMiliseg.getDay();
    switch (devolucionDiaSemana) {
        case 0:

            devolucionDiaSemana = "Domingo"

            break;

        case 1:

            devolucionDiaSemana = "Lunes"

            break;

        case 2:

            devolucionDiaSemana = "Martes"

            break;

        case 3:

            devolucionDiaSemana = "Miercoles"

            break;

        case 4:

            devolucionDiaSemana = "Jueves"

            break;

        case 5:

            devolucionDiaSemana = "Viernes"

            break;

        case 6:

            devolucionDiaSemana = "Sabado"

            break;

    }

    var devolucionDiaMes = devolucionFechaMiliseg.getDate();

    var devolucionMes = devolucionFechaMiliseg.getMonth();
    console.log("recogidaMes" + recogidaMes);

    switch (devolucionMes) {
        case 0:

            devolucionMes = "Enero"

            break;

        case 1:

            devolucionMes = "Febrero"

            break;

        case 2:

            devolucionMes = "Marzo"

            break;

        case 3:

            devolucionMes = "Abril"

            break;

        case 4:

            devolucionMes = "Mayo"

            break;

        case 5:

            devolucionMes = "Junio"

            break;

        case 6:

            devolucionMes = "Julio"

            break;
        case 7:

            devolucionMes = "Agosto"

            break;
        case 8:

            devolucionMes = "Septiembre"

            break;
        case 9:

            devolucionMes = "Octubre"

            break;
        case 10:

            devolucionMes = "Noviembre"

            break;
        case 11:

            devolucionMes = "Diciembre"

            break;

    }



    var devolucionAnio = devolucionFechaMiliseg.getFullYear();







    console.log("devolucionFechaMiliseg = " + devolucionFechaMiliseg);
    devolucionFechaMiliseg = devolucionFechaMiliseg.getTime();
    console.log("devolucionFechaMiliseg = " + devolucionFechaMiliseg);

    var recogidaHorarioHtml = (recogidaHorario.charAt(0) == "M") ? "Mañana" : "Tarde";
    var devolucionHorarioHtml = (devolucionHorario.charAt(0) == "M") ? "Mañana" : "Tarde";

    km = Number(km);

    //calculamos la duracion del alquiler

    var duracion = devolucionFechaMiliseg - recogidaFechaMiliseg;
    console.log("duracion = " + duracion);
    duracion = Number(duracion / (24 * 60 * 60 * 1000));
    console.log("duracion = " + duracion);

    if (recogidaHorario.charAt(0) == devolucionHorario.charAt(0)) {
        duracion = duracion;
    } else if (recogidaHorario.charAt(0) == "T" && devolucionHorario.charAt(0) == "M") {

        duracion = duracion - 0.5;

    } else if (recogidaHorario.charAt(0) == "M" && devolucionHorario.charAt(0) == "T") {

        duracion = duracion + 0.5;


    }

    console.log("duracion = " + duracion);

    //calculamos el precio diario de acuerdo con el tipo de caravana
    var precioDiario = 0;
    switch (caravana.charAt(6)) {
        case "E":
            precioDiario = 125;

            break;
        case "T":
            precioDiario = 150;

            break;
        case "A":
            precioDiario = 175;

            break;



    }


    console.log("precioDiario = " + precioDiario);

    //calculamos el importe
    var importe = duracion * precioDiario;
    console.log("importe = " + importe);

    //calculamos el suplemento de km

    var suplementoKm = (km - (duracion * 150)) * 0.3;
    if (suplementoKm < 0) {

        suplementoKm = 0;
        
    }
    console.log("suplementoKm = " + suplementoKm);

    //calculamos el importe total
    var importeTotal = importe + suplementoKm;
    console.log("importeTotal = " + importeTotal);


    //pintamos la tabla

    document.getElementById("tabla-nombre-completo").innerHTML = nombre.toUpperCase() + " - " + dni.toUpperCase();
    document.getElementById("tabla-modelo-caravana").innerHTML = caravana.toUpperCase();
    document.getElementById("tabla-recogida-fecha").innerHTML = recogidaDiaSemana + " " + recogidaDiaMes + " de " + recogidaMes +
        " de " + recogidaAnio;
    document.getElementById("tabla-recogida-horario").innerHTML = recogidaHorarioHtml;
    document.getElementById("tabla-devolucion-fecha").innerHTML = devolucionDiaSemana + " " + devolucionDiaMes + " de " + devolucionMes +
        " de " + devolucionAnio;
    document.getElementById("tabla-devolucion-horario").innerHTML = devolucionHorarioHtml;


    document.getElementById("tabla-duracion").innerHTML = duracion + " días";
    document.getElementById("tabla-precio").innerHTML = precioDiario.toLocaleString("es-ES" , { style: "currency", currency: "EUR" });
    document.getElementById("tabla-importe").innerHTML = importe.toLocaleString("es-ES" , { style: "currency", currency: "EUR" });

    document.getElementById("tabla-suplemento").innerHTML = suplementoKm.toLocaleString("es-ES" , { style: "currency", currency: "EUR" });
    document.getElementById("tabla-importe-total").innerHTML = importeTotal.toLocaleString("es-ES" , { style: "currency", currency: "EUR" });

    
    
    
}



function nuevaFechaDevolucion(){

console.log("Estoy dentro de nuevaFechaDevolucion");
recogidaFecha = document.getElementById("recogida-fecha").value;
console.log("recogidaFecha = " + recogidaFecha + " es de tipo " + typeof(recogidaFecha));
//convierto la fecha de entrada al objeto fecha
recogidaFecha = new Date (recogidaFecha);
console.log("recogidaFecha = " + recogidaFecha);

//convertir la fecha de entrada a milisegundos
recogidaFecha = recogidaFecha.getTime();

//fecha de salida es la de entrada mas 3 dia en milisegundos
fechaDevolucionMinima = recogidaFecha + 3*(24* 60 * 60 * 1000);
console.log("fechaDevolucionMinima = " + fechaDevolucionMinima);//esta fecha esta en milisegundos
//Convertir fecha salida a formato fecha
fechaDevolucionMinima = new Date (fechaDevolucionMinima);
console.log("fechaDevolucionMinima = " + fechaDevolucionMinima);

//Tengo que convertir la fecha de salida de objeto a string YYYY-MM-DD

fechaDevolucionMinima = fechaDevolucionMinima.toISOString();
console.log("fechaDevolucionMinima = " + fechaDevolucionMinima);// obtengo esta cadena: 2019-11-23T00:00:00.000Z
//corto la cadena me quedo con los 10 primeros caracteres
fechaDevolucionMinima = fechaDevolucionMinima.slice(0,10);
console.log("fechaDevolucionMinima = " + fechaDevolucionMinima);

//habilito fecha de salida
document.getElementById("devolucion-fecha").removeAttribute("disabled");
//pongo en la fecha de salida la fecha de entrada
document.getElementById("devolucion-fecha").value = fechaDevolucionMinima;
//pongo como minimo la fecha de entrada en la salida
document.getElementById("devolucion-fecha").setAttribute("min", fechaDevolucionMinima);
}