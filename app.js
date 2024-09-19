// Función para renderizar las categorías
function renderCategorias() {
    const categoriasDiv = document.getElementById('categorias');

    categorias.forEach(categoria => {
        const categoriaCard = document.createElement('div');
        categoriaCard.className = 'categoria-card';
        categoriaCard.innerHTML = `
            <h3>${categoria.nombre}</h3>
        `;
        categoriaCard.onclick = () => mostrarProductos(categoria.id);

        categoriasDiv.appendChild(categoriaCard);
    });
}

// Función para mostrar los productos de una categoría seleccionada
function mostrarProductos(categoriaId) {
    const inicioDiv = document.getElementById('inicio');
    const productosDiv = document.getElementById('productos');
    const productosContainer = document.getElementById('productosContainer');
    const tituloCategoria = document.getElementById('tituloCategoria');

    // Ocultar la sección de inicio
    inicioDiv.style.display = 'none';

    // Mostrar la sección de productos
    productosDiv.style.display = 'block';
    productosContainer.innerHTML = ''; // Limpiar los productos anteriores
    tituloCategoria.innerText = categorias.find(c => c.id === categoriaId).nombre; // Setear el título

    // Renderizar productos de la categoría seleccionada
    productos[categoriaId].forEach(producto => {
        const productoCard = document.createElement('div');
        productoCard.className = 'producto-card';
        productoCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <a href="${producto.whatsapp}" target="_blank">Consultar por WhatsApp</a>
        `;

        productosContainer.appendChild(productoCard);
    });
}

// Función para volver a la pantalla de categorías
function volverACategorias() {
    const inicioDiv = document.getElementById('inicio');
    const productosDiv = document.getElementById('productos');

    productosDiv.style.display = 'none';
    inicioDiv.style.display = 'block';
}

// Asociar el botón "volver" a la función volverACategorias
document.getElementById('volver').onclick = volverACategorias;

// Función para manejar el icono de carga
function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

// Función principal que se ejecuta al cargar la página
window.onload = function() {
    showLoader(); // Mostrar el icono de carga

    // Simulamos una carga de datos con un pequeño retraso
    setTimeout(() => {
        hideLoader(); // Ocultar el icono de carga
        document.getElementById('app').style.display = 'block'; // Mostrar el contenido
        renderCategorias(); // Renderizar las categorías
    }, 2000); // 2 segundos de espera para simular la carga
};
