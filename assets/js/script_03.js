//  *******  PROGRAMA  PRINCIPAL  *******  //
let formulariox = document.getElementById('sumar_restar')
formulariox.addEventListener("click" , (event) => {
    event.preventDefault()
    let id_btn_press = event.target.id
    let val_01 = document.getElementById("valor1").value
    let val_02 = document.getElementById("valor2").value
    let valor_01 = parseInt(val_01)
    let valor_02 = parseInt(val_02)
    document.getElementById("tituloErrores").innerHTML = ""
    document.getElementById("val_1").innerHTML = ""
    document.getElementById("val_2").innerHTML = ""
    document.getElementById("val_2menor").innerHTML = ""
    if (validar(val_01) && validar(val_02)){
        if(id_btn_press == "btn_sumar") {
            document.querySelector(".resultado").innerHTML = valor_01 + valor_02
        }
        if (id_btn_press == "btn_resta" && valor_01 >= valor_02) {
            document.querySelector(".resultado").innerHTML = valor_01 - valor_02
        }
        if (id_btn_press == "btn_resta" && valor_02 > valor_01) {
            document.querySelector(".resultado").innerHTML = 0
            document.getElementById("tituloErrores").innerHTML = "Sugerencia:"
            document.getElementById("val_2menor").innerHTML = `Valor 2 (${valor_02}) de preferencia menor a Valor 1  (${valor_01})`
        }
    }
    if (validar(val_01) == false) {
        document.querySelector(".resultado").innerHTML = ""
        document.getElementById("tituloErrores").innerHTML = "Error!!"
        document.getElementById("val_1").innerHTML = "Valor 1 debe ser un número (máx 8 dígitos)."
    } 
    if (validar(val_02) == false) {
        document.querySelector(".resultado").innerHTML = ""
        document.getElementById("tituloErrores").innerHTML = "Error!!"
        document.getElementById("val_2").innerHTML = "Valor 2 debe ser un número (máx 8 dígitos)."
    }
})
//  ***  END  ***  //
//
//
//  ***  Funcion  Validar  Números  ***  //
let validar = (valor) => {
    let num_RegExp = /^[\d]{1,8}$/
    return num_RegExp.test(valor)
}