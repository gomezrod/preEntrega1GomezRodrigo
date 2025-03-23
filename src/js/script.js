
let test = document.querySelector("H1");
let flag = false;
setInterval(() => {
    if(!flag) {
        test.textContent="Bienvenidos"
        flag = true;
    }else{
        test.textContent="Forja Oeste";
        flag = false;
    }
}, 1000)

let subtitle = document.querySelector('H3');
subtitle.addEventListener('click', () => {
    console.log('Click');
    
})

// checklist css puro

let list = document.querySelectorAll("ul");
list.forEach((item) => {
    item.addEventListener(
        "click",
        function (ev) {
            console.log('click');

            if (ev.target.tagName === "LI") {
                ev.target.classList.toggle("done");
            }
        },
        false,
    );
})

// form verification

const contactoCliente = {
    nombre: '',
    email: '',
    modalidad: '',
    mensaje: ''
}

const entradaNombre = document.querySelector('#nombre');
const entradaMail = document.querySelector('#email');
const entradaModalidad = document.querySelector('#modalidad');
const entradaMensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#formulario');

entradaNombre.addEventListener('input', cargarInfo);
entradaMail.addEventListener('input', cargarInfo);
entradaModalidad.addEventListener('input', cargarInfo);
entradaMensaje.addEventListener('input', cargarInfo);
formulario.addEventListener('submit', (e) => {
    
    e.preventDefault();
    const {nombre, email, modalidad, mensaje } = contactoCliente;
    if(nombre === '' || email === '' || modalidad === '' || mensaje === ''){
        mostrarMensaje('Todos los campos son necesarios', true);
        return;
    }
    mostrarMensaje('Formulario enviado correctamente', false);
    
});

function cargarInfo(e){
    contactoCliente[e.target.id] = e.target.value;
    console.log(contactoCliente);
}

function mostrarMensaje(msg, state) {
    const mensaje = document.createElement('P');
    mensaje.textContent = msg;

    if(state){
        mensaje.classList.add('error');
    }else{
        mensaje.classList.add('exito');
    }

    formulario.appendChild(mensaje);
    console.log(mensaje);

    setTimeout(() => {
        mensaje.remove();
    }, 3000)

}