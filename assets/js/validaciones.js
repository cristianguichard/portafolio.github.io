const inputNombre = document.querySelector("#nombre");
const inputCorreo = document.querySelector('#email')
const inputTema  = document.querySelector("#tema")
const inputMensaje = document.querySelector("#mensaje")

inputNombre.addEventListener('blur', (evento) => {
   validarNombre(evento.target)
})

function validarNombre(input){
    const nombre = input.value;
    if(nombre.length >= 50)
        alert("texto es muy largo")
}

inputTema.addEventListener("blur", (evento)=>{
    validarAsunto(evento.target)
})

function validarAsunto(input){
    const nombre = input.value;
    if(nombre.length >= 50)
        alert("texto es muy largo")
}

inputMensaje.addEventListener('blur', (evento)=>{
    validarMensaje(evento.target)
})

function validarMensaje(input){
    const nombre = input.value;
    if(nombre.length >= 50)
        alert("texto es muy largo")
}

if(inputNombre.length <= 0 || inputCorreo.length <= 0  || inputTema.length <= 0 || inputMensaje.length <= 0 ){
    document.querySelector('#button').disabled = true;
}else{
    document.querySelector('#button').disabled = false;
}