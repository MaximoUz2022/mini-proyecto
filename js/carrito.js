let GuardarPedido = [];

function InicioProducto() {
    GuardarDatos('00314', 'Puma alboroto híbrido Tribunal', '600.00', '0', 'imagenes/Puma alboroto híbrido Tribunal.jpg');
    GuardarDatos('45692', 'Puma JAAB XT Entrenamiento Tenis Zapatos de entrenamiento', '500.99', '0', 'imagenes/Puma JAAB XT Entrenamiento Tenis Zapatos de entrenamiento.jpg');
    GuardarDatos('203652', 'Capacitación de Hombre Puma axelion NXT', '800.99', '0', 'imagenes/Capacitación de Hombre Puma axelion NXT.jpg');
    GuardarDatos('203685', 'Puma Zapatos Tenis De Hombre', '390.99', '0', 'imagenes/Puma Zapatos Tenis De Hombre.jpg');
    GuardarDatos('147896', 'Puma Tenis  híbrido-Blanco', '1200.00', '0', 'imagenes/Puma Tenis  híbrido-Blanco.jpg');
    GuardarDatos('789645', 'Puma 193632-04 Cell Pharos', '300.00', '0', 'imagenes/Puma 193632-04 Cell Pharos.jpg');
    GuardarDatos('126325', 'Puma 193632-08 celdas Pharos', '250.00', '0', 'imagenes/Puma 193632-08 celdas Pharos.jpg');
    GuardarDatos('48756211', 'Puma 193632-02 Cell Pharos ', '400.00', '0', 'imagenes/Puma 193632-02 Cell Pharos.jpg');
    GuardarDatos('2000214', 'Puma 193069-02 H.St.20 Training', '700.00', '0', 'imagenes/Puma 193069-02 H.St.20 Training.jpg');
    GuardarDatos('3020142', 'Puma 194095-06 H.St.20 Kit 2', '800.00', '0', 'imagenes/Puma 194095-06 H.St.20 Kit 2.jpg');
    GuardarDatos('63201425', 'Puma 194095-04 H.St.20 Kit 2', '900.00', '0', 'imagenes/Puma 194095-04 H.St.20 Kit 2.jpg');
    GuardarDatos('3025418', 'Puma 194043-01 Sky Modern', '800.00', '0', 'imagenes/Puma 194043-01 Sky Modern.jpg');
    GuardarDatos('63257852', 'Puma 194048-04 Legacy Mm Mens', '300.00', '0', 'imagenes/Puma 194048-04 Legacy Mm Mens.jpg');
    OpcionCarrito();
}

function finalizarPedido() {
    alert('Pedido Finalizado y enviado corractamente!');
}

function GuardarDatos(codigo, descripcion, precio, cantidad, imagen) {
    GuardarPedido.push(
        {
            codigo: codigo, descripcion: descripcion, precio: precio, cantidad: cantidad, imagen: imagen
        }
    );
}

var totalPedido = 0;
function OpcionCarrito() {
    totalPedido = 0;
    let CarritoSalida = '';
    for (RecorrerPedido of GuardarPedido) {
        CarritoSalida +=
            `
        <tr>
        <td>${RecorrerPedido.codigo}</td>
        <td>${RecorrerPedido.descripcion}<img src="${RecorrerPedido.imagen}" width="70"></td>
        <td><button onclick="EliminarProducto('${RecorrerPedido.codigo}');"><i class="fa fa-trash-o" style="font-size:24px"></i></button> <button onclick="sumarCantidad('${RecorrerPedido.codigo}');">+</button> <button onclick="restarCantidad('${RecorrerPedido.codigo}');">-</button> ${RecorrerPedido.cantidad}</td>
        <td>${RecorrerPedido.precio}</td>
        <td>${RecorrerPedido.cantidad * RecorrerPedido.precio}</td>
        </tr>
        `
        totalPedido += RecorrerPedido.cantidad * RecorrerPedido.precio;
    }
    document.getElementById('detalleDelPedido').innerHTML = CarritoSalida;
    document.getElementById('total').innerHTML = totalPedido;
}

function EliminarProducto(IdProducto) {
    var VectorTemporalmente = []
    for (RecorrerPedido of GuardarPedido) {
        if (RecorrerPedido.codigo != IdProducto) {
            VectorTemporalmente.push(
                {
                    codigo: RecorrerPedido.codigo, descripcion: RecorrerPedido.descripcion, precio: RecorrerPedido.precio, cantidad: RecorrerPedido.cantidad, imagen: RecorrerPedido.imagen
                }
            );
        }
    }
    GuardarPedido = [];
    GuardarPedido = VectorTemporalmente;
    OpcionCarrito();
}

var VectorTemporalmente = []

function restarCantidad(IdProducto) {
    var VectorTemporalmente = []
    for (RecorrerPedido of GuardarPedido) {
        if (RecorrerPedido.codigo == IdProducto) {
            var CantidadProductoCarrito = parseInt(RecorrerPedido.cantidad);
            var laNuevaCantidadDelCarrito = CantidadProductoCarrito - 1;
            if (CantidadProductoCarrito > 1) {
                VectorTemporalmente.push(
                    {
                        codigo: RecorrerPedido.codigo, descripcion: RecorrerPedido.descripcion, precio: RecorrerPedido.precio, cantidad: laNuevaCantidadDelCarrito, imagen: RecorrerPedido.imagen
                    }
                );
            }
            if (CantidadProductoCarrito <= 1) {
                alert("La cantidad no puede contener Cero, utilize la opcion eliminar!.");
                VectorTemporalmente.push(
                    {
                        codigo: RecorrerPedido.codigo, descripcion: RecorrerPedido.descripcion, precio: RecorrerPedido.precio, cantidad: RecorrerPedido.cantidad, imagen: RecorrerPedido.imagen
                    }
                );
            }
        }
        if (RecorrerPedido.codigo != IdProducto) {
            VectorTemporalmente.push(
                {
                    codigo: RecorrerPedido.codigo, descripcion: RecorrerPedido.descripcion, precio: RecorrerPedido.precio, cantidad: RecorrerPedido.cantidad, imagen: RecorrerPedido.imagen
                }
            );
        }
    }
    GuardarPedido = [];
    GuardarPedido = VectorTemporalmente;
    OpcionCarrito();
}

function sumarCantidad(IdProducto) {
    var VectorTemporalmente = []
    for (RecorrerPedido of GuardarPedido) {
        if (RecorrerPedido.codigo == IdProducto) {

            var CantidadProductoCarrito = parseInt(RecorrerPedido.cantidad);
            var laNuevaCantidadDelCarrito = CantidadProductoCarrito + 1;
            VectorTemporalmente.push(
                {
                    codigo: RecorrerPedido.codigo, descripcion: RecorrerPedido.descripcion, precio: RecorrerPedido.precio, cantidad: laNuevaCantidadDelCarrito, imagen: RecorrerPedido.imagen
                }
            );

        }
        if (RecorrerPedido.codigo != IdProducto) {
            VectorTemporalmente.push(
                {
                    codigo: RecorrerPedido.codigo, descripcion: RecorrerPedido.descripcion, precio: RecorrerPedido.precio, cantidad: RecorrerPedido.cantidad, imagen: RecorrerPedido.imagen
                }
            );
        }
    }
    GuardarPedido = [];
    GuardarPedido = VectorTemporalmente;
    OpcionCarrito();
}