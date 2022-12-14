let catalogo = [];
let carrito = [];
let producto;

agregaraCatalogo(100, "Producto A", 800.00);
agregaraCatalogo(200, "Producto B", 300.00);



function agregarProducto(codigo){
    let cantidad = document.getElementById("cantidad-" + codigo).value;
    let productoEncontrado = catalogo.find(producto => producto.codigo == codigo);

    let productoCarrito = {
        producto: productoEncontrado,
        cantidad: cantidad,
        subtotal: cantidad * productoEncontrado.precio
    }

    carrito.push(productoCarrito);
    console.log(carrito);

}

function agregaraCatalogo(codigo, nombre, precio) {
    
    if(catalogo.find(producto => producto.codigo == codigo) != undefined){
        alert("El codigo de producto ya existe");
        return;
    }

    
    producto = {
        codigo: codigo,
        nombre: nombre,
        precio: precio
    }

    catalogo.push(producto);
}

function llenarCatalogo() {
    let tbody = document.createElement("tbody");
    tbody.setAttribute("id", "tabla-contenido");

    catalogo.forEach(producto => {

        let fila = document.createElement("tr");
        fila.setAttribute("id", producto.codigo);
        fila.setAttribute("name", producto.codigo);

        fila.innerHTML =
            `
        <td style="text-align: center;">
            <span>${producto.codigo}</span>
        </td>
        <td>
            <div class="contenedor-flex">
                            <span>${producto.nombre}</span>
                <form action="">
                    <label for="cantidad-${producto.codigo}">Cantidad</label>
                    <input type="number" name="cantidad-${producto.codigo}" id="cantidad-${producto.codigo}" value="1" min="1">
                </form>
            </div>
        </td>
        <td>
            <div class="contenedor-flex">
                <span style="text-align: right;">Q. <span id="precio-${producto.codigo}">${producto.precio}</span></span>
                <button type="button" class="btn-agregar-carrito" onclick="agregarProductoCarrito(${producto.codigo});">Agregar al carrito</button>
            </div>
        </td>
        <td style="text-align: center;">
            <img src="img/${producto.codigo}.webp" alt="Error" class="imagen-producto">
        </td>
        `

        tbody.appendChild(fila);
    });
    document.getElementById("tabla-productos").appendChild(tbody);

}
