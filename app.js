// Función para renderizar categorías
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

    // Ocultar la sección de inicio
    inicioDiv.style.display = 'none';

    // Mostrar la sección de productos
    productosDiv.style.display = 'block';
    productosContainer.innerHTML = ''; // Limpiar los productos anteriores

    // Renderizar productos de la categoría seleccionada
    productos[categoriaId].forEach(producto => {
        const productoCard = document.createElement('div');
        productoCard.className = 'producto-card';
        productoCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
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

// Renderizar categorías cuando cargue la página
window.onload = function() {
    renderCategorias();
};
