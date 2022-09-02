const fileInput = document.getElementById('image');
const dragZone = document.getElementById('result-image');
const img = document.getElementById('img-result');

dragZone.addEventListener('click', () => fileInput.click())

dragZone.addEventListener('dragover', (e) => {
    e.preventDefault()

dragZone.classList.add('form-file_result--active')
    })

dragZone.addEventListener('dragleave', (e) => {
    e.preventDefault()
    
dragZone.classList.remove('form-file_result--active')
    })

const uploadImage = (file) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('load', (e) => {
        img.setAttribute('src', e.target.result)
    })
}

dragZone.addEventListener('drop', (e) =>{
    e.preventDefault()
    fileInput.files = e.dataTransfer.files
    const file = fileInput.files[0]
})

fileInput.addEventListener('change', (e) => {
	const file = e.target.files[0]
	uploadImage(file)
    CargarTabla(file);
})


let productos = [];


function Validardatos(id, nombre, precio){

    if (id == '') {
        alert('Ingresar un Codigo');
        return false;
    }

    if (nombre == '') {
        alert('Ingresar el nombre');
        return false;
    }

    if (precio == '') {
        alert('Ingresar el precio');
        return false;
    }

    return true;
}

function GuardarDatos(id, nombre, precio){

    productos.push(
        {
            id: id,
            nombre: nombre,
            precio: precio,
        }
    );

}

function MostrarDatos(){
    let registros = '';

    for (let i = 0; i < productos.length; i++) {
       
        registros +=
        `
            <tr>
                <td>${productos[i].id}</td>
                <td>${productos[i].nombre}</td>
                <td>${productos[i].precio}</td>
                
            </tr>
        `
    }

    let detalle = document.getElementById('detalle');

    detalle.innerHTML = registros;

}

function limpiarControles(){
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
}


function guardarRegistro(){

    let id = document.getElementById('id').value;
    let nombre = document.getElementById('name').value;
    let precio = document.getElementById('price').value;

    // validar datos

    if (Validardatos(id,nombre,precio) == false) {
        return;
    }

    // guardar datos

    GuardarDatos(id,nombre,precio);

    // mostrar datos

    MostrarDatos();


    // limpiar controles

    limpiarControles();

}