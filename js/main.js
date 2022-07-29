let horas = 0; 
let minutos = 0;
let segundos = 0;

/* Datos para Validación Mario */
let turnop = document.getElementById("turnop").innerText;
let horap = document.getElementById("horap").innerText;

console.log("El turno actual es:" + turnop);    
console.log("La hora actual es:" + horap);    

/* Fin de datos para validación Mario */


cargarSegundos();
/* ESTABLECIENDO SEGUNDOS */
function cargarSegundos() {
    let txtSegundos;
    if (segundos < 0) {
        segundos = 59;
    }

    if (segundos < 10) {
        txtSegundos = `0${segundos}`;
    } else {
        txtSegundos = segundos;
    }

    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos--;

    cargarMinutos(segundos);
}


/* ESTABLECIENDO MINUTOS */
function cargarMinutos(segundos) {
    let txtMinutos;
    if (segundos == -1 && minutos !== 0) {
        setTimeout(() => {
            minutos--;
        }, 500);
    } else if (segundos == -1 && minutos == 0) {
        setTimeout(() => {
            minutos = 59;
        }, 500);
    }

    //Mostrando Minutos en página
    if (minutos < 10) {
        txtMinutos = `0${minutos}`;
    } else {
        txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos;
    cargarHoras(segundos, minutos);

}




/* ESTABLECIENDO HORAS */
function cargarHoras(segundos, minutos) {
    let txtHoras;



    if (segundos == -1 && minutos == 0 && horas !== 0) {
        setTimeout(() => {
            horas--;
        }, 500);
    }else if(segundos == -1 && minutos == 0 && horas == 0){ /* Reset a 2 horas */
        setTimeout(() => {
            horas = 2;
        }, 500);
    }

    
 /*    if(horap == "03:00 PM"){
        setTimeout(() => {
            horas = 2;
        }, 500);
    }else if (horap == "09:00 PM"){
        setTimeout(() => {
            horas = 13;
        }, 500);
    }else{
        horas = 23;
    } */

    //Mostrar horas en pantalla
    if(horas < 10){
        txtHoras = `0${horas}`;
    }else{
        txtHoras = horas;
    }
    document.getElementById('horas').innerHTML = txtHoras;
}


    //Ejecutando decremento de los Segundos

    setInterval(cargarSegundos, 1000);