comprar()

function comprar() {
    categoria = obtenerCategoria()
    if (categoria == 'ropa' || categoria == 'electronica') {
        let descuento = calcularDescuento()
        let cantidad = Number(prompt('Ingrese la cantidad de productos:'))
        let precioUnitario = Number(prompt('Ingrese el precio unitario del producto:'))
        alert(`El precio total de su compra es :$${calcularPrecioFinal(precioUnitario, cantidad, descuento)}`)
    } else {
        console.log('El producto no es de la categoria de ropa o electronica')
        comprar()
    }
}

function obtenerCategoria() {
    return prompt('Ingrese la categoria del producto (Ropa o electronica)').toLowerCase();
}

function calcularDescuento() {
    if (categoria == 'ropa') {
        descuento = 0.05;
    } else if (categoria == 'electronica') {
        descuento = 0.10;
    }
    return descuento;
}

function calcularPrecioFinal(precioUnitario, cantidad, descuento) {
    return precioUnitario * cantidad * (1 - descuento)
}