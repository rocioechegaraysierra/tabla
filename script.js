
let objetoVidrio = document.querySelector("#Vidrio")
let objetoPlastico = document.querySelector("#Plastico")
let objetoLata = document.querySelector("#Lata")
let objetoPila = document.querySelector("#Pila")
let objetoBolsa = document.querySelector("#Bolsa")


if(objetoBolsa != null){
    objetoBolsa.addEventListener("click",
    function mostrarInformacion() {
    
        let contenedor = document.querySelector("#Mensaje")
        while (contenedor.hasChildNodes()) {
            contenedor.removeChild(contenedor.firstChild);
        }
        let mensaje = document.createTextNode("p")
        mensaje.textContent = "Nombre: BOLSA DE PLÁSTICO, Tiempo de descomposición: 1000 años"
        contenedor.appendChild(mensaje);

    }
)
}

if(objetoVidrio != null){

    objetoVidrio.addEventListener("click",
    function mostrarInformacion() {
  
        
        let contenedorNombre = document.querySelector("#Mensaje")
        while (contenedorNombre.hasChildNodes()) {
            contenedorNombre.removeChild(contenedorNombre.firstChild);
        }
        let mensaje = document.createTextNode("p")
        mensaje.textContent = "Nombre: BOTELLA DE VIDRIO, Tiempo de descomposición: 4000 años"
        contenedorNombre.appendChild(mensaje);
        

    }
)
}

if(objetoLata != null){
    objetoLata.addEventListener("click",
    function mostrarInformacion() {
    
        let contenedorNombre = document.querySelector("#Mensaje")
        while (contenedorNombre.hasChildNodes()) {
            contenedorNombre.removeChild(contenedorNombre.firstChild);
        }
        let mensaje = document.createTextNode("p")
        mensaje.textContent = "Nombre: LATA, Tiempo de descomposición: 10 años"
        contenedorNombre.appendChild(mensaje);
    
    }
    )
}

if(objetoPila != null){

    objetoPila.addEventListener("click",
    function mostrarInformacion() {
    
    
        let contenedorNombre = document.querySelector("#Mensaje")
        while (contenedorNombre.hasChildNodes()) {
            contenedorNombre.removeChild(contenedorNombre.firstChild);
        }
        let mensaje = document.createTextNode("p")
        mensaje.textContent = "Nombre: PILA, Tiempo de descomposición: entre 500 y 1000 años"
        contenedorNombre.appendChild(mensaje);
        
    }
    )
}

if(objetoPlastico != null){

    objetoPlastico.addEventListener("click",
    function mostrarInformacion() {


        let contenedorNombre = document.querySelector("#Mensaje")
    while (contenedorNombre.hasChildNodes()) {
        contenedorNombre.removeChild(contenedorNombre.firstChild);
    }
    let mensaje = document.createTextNode("p")
    mensaje.textContent = "Nombre: BOTELLA DE PLÁSTICO, Tiempo de descomposición: 150 años"
    contenedorNombre.appendChild(mensaje);

    }
)
}

