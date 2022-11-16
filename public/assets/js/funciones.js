// const calcularSubtotal = () => {
//     const cantidad = document.querySelector('#cantidad')
//     const precio = document.querySelector('#precio')
//     let subtotal = document.querySelector('#subtotal')
//     subtotal.value = cantidad.value * precio.value
// }

// const cantidad = document.querySelector('#cantidad')
// cantidad.addEventListener('keypress', calcularSubtotal)
// cantidad.addEventListener('keyapp', calcularSubtotal)
// cantidad.addEventListener('keydown', calcularSubtotal)

// const registrarPedido = () => {
//     const cantidad = document.querySelector('#cantidad')
//     const precio = document.querySelector('#precio')
//     if (cantidad.value.length == 0 || precio.value.length == 0){ 
//         document.getElementById('respuesta').innerHTML = 'La cantidad o el precio no pueden estar vacíos'
//     }
//     else{
//         document.getElementById('respuesta').innerHTML = 'Transacción exitosa'
//     }
// }

// const btnRegistrar = document.querySelector('#btnRegistrar')
// btnRegistrar.addEventListener('click',registrarPedido)

registrarUsuario = (e) =>{
    e.preventDefault();
    let nombre = document.querySelector('#nombre') 
    let apellido = document.querySelector('#apellido') 
    let identificacion = document.querySelector('#identificacion') 
    let correo = document.querySelector('#correo') 
    let telefono = document.querySelector('#telefono') 
    let direccion = document.querySelector('#direccion')
    
    if (nombre.value.length == 0 || apellido.value.length == 0 || identificacion.value.length == 0 || correo.value.length == 0 || telefono.value.length == 0 || direccion.value.length == 0){ 
        document.getElementById('respuesta').innerHTML = 'Ningún campo puede estar vacío'
    }
    else{
        document.getElementById('respuesta').innerHTML = 'Registro exitoso'
    }
}

const enviar = document.querySelector('#enviar')
enviar.addEventListener('click',registrarUsuario)