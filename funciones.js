document.getElementById('boton datos').addEventListener('click', function(){
    document.getElementById("mostrar").innerHTML = " "
    var listView = document.querySelector('#mostrar');
    persona.forEach((item) => {
      listView.innerHTML += `<li>${item}</li>`;
    });
})

document.getElementById('boton formacion').addEventListener('click', function(){
    document.getElementById("mostrar").innerHTML = " "
    var listView = document.querySelector('#mostrar');
    academica.forEach((item) => {
      listView.innerHTML += `<li>${item}</li>`;
    });
})

document.getElementById('boton cursos').addEventListener('click', function(){
    document.getElementById("mostrar").innerHTML = " "
    var listView = document.querySelector('#mostrar');
    cursos.forEach((item) => {
      listView.innerHTML += `<li>${item}</li>`;
    });
})

document.getElementById('boton objetivo').addEventListener('click', function(){
    document.getElementById("mostrar").innerHTML = "Establecerme y consolidarme en una empresa que me otorgue estabilidad laboral, aplicar mis experiencias y conocimientos en las distintas áreas de la empresa, y desarrollarme profesionalmente para el buen desempeño de las funciones asignadas"
})

const capacitacion = '{"curso1": "Seminario sobre mantenimiento de cybers (Fundación Roberto Romero)","curso2": "Técnico reparador de PC (INI computacion)","curso3": "Capacitación para mozo (Biblioteca Juan Carlos Dávalos)","curso4": "Mantenimiento de radioenlaces (Sertecom S.A.)","curso5": "Sistema PolarSat VSATPlus 3 (SES Sistemas Electronicos S.A.)","curso6": "Diagnostico de fallas (Train Point)","curso7": "Operacion y mantenimiento grupos electrógenos Deutz (Fuerza Aérea)","curso8": "Radioenlaces Ericsson Mini-Link TN R5 (Ericnet)","curso9": "Antenista militar (Ejército Argentino)","curso10": "Equipos terrestres de comunicacion (Fuerza Aérea)","curso11": "Sistemas CVOR 431-DME 415 RPM Y RCSI 447(RDC comunicaciones)","curso12": "Equipamientos de comunicaciones VHF/UHF (Rohde & Schwarz)","curso13": "Equipamientos de comunicaciones VHF/UHF y HF (Rohde & Schwarz)","curso14": "Operación VHF/UHF y HF de RPA Serie 2 (Rohde & Schwarz)","curso15": "Técnico VHF/UHF y HF de RPA Serie 2 (Rohde & Schwarz)","curso16": "Operador de equipamiento radioeléctrico (Fuerza Aérea)","curso17": "Operador de sistema criptográfico HF (Fuerza Aérea)","curso18": "1º etapa de #SeProgramar (Argentina programa 4.0)"}'
const cap = JSON.parse(capacitacion)

const datos = '{"nombre":"Mario", "apellido":"Cordoba", "nacimiento":"20 Octubre 1989, Salta Capital", "dni":34874846, "edad":33, "direccion":"Miguel David 3165, Parana - Entre Rios", "mail":"mario1989cordoba@gmail.com", "numero":"3517556328", "primaria":"Mtro. Alejandro Gauffin, Salta Capital", "secundaria":"EET N 5117, Mtro. Daniel Oscar Reyes, Salta capital", "titulo1":"Polimodal en producción de bienes y servicios(Informatica)", "terciaria":"Escuela de Suboficiales de Fuerza Aerea Argentina, Cordoba Capital", "titulo2":"Técnico superior en electrónica aeronautica"}'
const obj = JSON.parse(datos)

var persona = [
    "<u>Nombre:</u> " + obj.nombre,
    "<u>Apellido:</u> " + obj.apellido,
    "<u>DNI:</u> " + obj.dni,
    "<u>Lugar y fecha de nacimiento:</u> " + obj.nacimiento,
    "<u>Edad:</u> " + obj.edad,
    "<u>Dirección:</u> "+ obj.direccion,
    "<u>E-mail:</u> " + obj.mail,
    "<u>Teléfono:</u> " + obj.numero,
  ];

  var academica = [
    "<u>Primaria:</u> " + obj.primaria,
    "<u>Secundaria:</u> " + obj.secundaria,
    "<u>Título obtenido:</u> " + obj.titulo1,
    "<u>Terciaria:</u> " + obj.terciaria,
    "<u>Título obtenido:</u> " + obj.titulo2,
  ];

  var cursos = [
    cap.curso1,
    cap.curso2,
    cap.curso3,
    cap.curso4,
    cap.curso5,
    cap.curso6,
    cap.curso7,
    cap.curso8,
    cap.curso9,
    cap.curso10,
    cap.curso11,
    cap.curso12,
    cap.curso13,
    cap.curso14,
    cap.curso15,
    cap.curso16,
    cap.curso17,
    cap.curso18,
  ];