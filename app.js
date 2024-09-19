// Función para renderizar la descripción de la empresa
function renderDescripcion() {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = `<h1>Venta de Mochilas</h1>
                        <div class="descripcion">${descripcionEmpresa}</div>
                        <h2>Selecciona una categoría:</h2>`;
    
    const categoriasContainer = document.createElement('div');
    categoriasContainer.className = 'categorias-container';

    for (const categoria in categorias) {
        const categoriaDiv = document.createElement('div');
        categoriaDiv.className = 'categoria';
        categoriaDiv.innerText = categoria.charAt(0).toUpperCase() + categoria.slice(1); // Capitaliza el nombre de la categoría

        categoriaDiv.onclick = () => {
            renderImagenes(categoria);
        };

        categoriasContainer.appendChild(categoriaDiv);
    }

    appDiv.appendChild(categoriasContainer);
}

// Función para renderizar imágenes de una categoría seleccionada
function renderImagenes(categoria) {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = `<h1>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h1>`;

    const imagenesContainer = document.createElement('div');
    imagenesContainer.className = 'imagenes-container';

    categorias[categoria].forEach(item => {
        const imagenCard = document.createElement('div');
        imagenCard.className = 'imagen-card';
        imagenCard.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <h2>${item.nombre}</h2>
            <a href="${item.whatsapp}" target="_blank">Consultar por WhatsApp</a>
        `;

        imagenesContainer.appendChild(imagenCard);
    });

    appDiv.appendChild(imagenesContainer);
}

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
        renderDescripcion(); // Renderizar la descripción
    }, 2000); // 2 segundos de espera para simular la carga
};
