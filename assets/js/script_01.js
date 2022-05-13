//  *******  PROGRAMA  PRINCIPAL  *******  //
let formulariox = document.getElementById('formulario')

formulariox.addEventListener("submit" , (event) => {
    event.preventDefault()
    let nombre = ValidarNombre()
    let asunto = ValidarAsunto()
    let mensaje = ValidarMensaje()
    // Validaciones de los inputs
    if (nombre) {
        alert("El Nombre ingresado es Válido!!!")
    } else {
        alert(`El Nombre ingresado NO ES  válido...
        Nombre(s) y Apellido(s)  (solo texto)`)
    }
    //
    if (asunto) {
        alert("El Asunto ingresado es Válido!!!")
    } else {
        alert(`El Asunto ingresado NO ES  válido...
        mínimo una palabra. (solo texto)`)
    }
    //
    if (mensaje) {
        alert("El Mensaje ingresado es Válido!!!")
    } else {
        alert(`El Mensaje ingresado NO ES  válido...
        mínimo una palabra. (solo texto)`)
    }
    if (nombre && asunto && mensaje) {
        document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito !!!"
    } else {
        document.querySelector(".resultado").innerHTML = ""
    }
})
//  *******  END  *******  //
//
//
//
//  *******  FUNCIONES  *******  //
//
function ValidarNombre() {
    let nombrex = document.getElementById("nombre").value
    let esValido = true 
    document.querySelector(".errorNombre").style.border = "0px Solid green"
    document.querySelector(".errorNombre").innerHTML = ""
    if (nombrex == "" || ValidarContenidoNombre(nombrex) == false) {
        esValido = false
        document.querySelector(".errorNombre").style.border = "2px Solid green"
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido..."
    }
    return esValido
}
//
function ValidarAsunto() {
    let asuntox = document.getElementById("asunto").value
    let esValido = true
    document.querySelector(".errorAsunto").style.border = "0px Solid green"
    document.querySelector(".errorAsunto").innerHTML = ""
    if (asuntox == "" || ValidarContenidoAsuntoMensaje(asuntox) == false) {
        esValido = false
        document.querySelector(".errorAsunto").style.border = "2px Solid green"
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido..."
    }
    return esValido
}
//
function ValidarMensaje() {
    let mensajex = document.getElementById("mensaje").value
    let esValido = true
    document.querySelector(".errorMensaje").style.border = "0px Solid green"
    document.querySelector(".errorMensaje").innerHTML = ""
    if (mensajex == "" || ValidarContenidoAsuntoMensaje(mensajex) == false) {
        esValido = false
        document.querySelector(".errorMensaje").style.border = "2px Solid green"
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido..."
    }
    return esValido
}
//
function ValidarContenidoNombre(contenido) {
    let RegExpNombre = /^([a-záéíóúñ]+)(\s[a-záéíóúñ]+){1,3}$/i // Valida desde 2 hasta 4 Palabras
    return RegExpNombre.test(contenido)
} 
//
function ValidarContenidoAsuntoMensaje(contenido2) {
    let RegExpNombre = /^([a-záéíóúñ]+\s?)+$/i // Valida n palabras
    return RegExpNombre.test(contenido2)
} 


// let newboton = botonx.cloneNode(true)
// botonx.id = "chile"
// document.body.append(newboton)
