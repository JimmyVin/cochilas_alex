// Función para renderizar mochilas
function renderMochilas() {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = `<h1>Venta de Mochilas</h1>`;

    const mochilasContainer = document.createElement('div');
    mochilasContainer.className = 'mochilas-container';

    mochilas.forEach(mochila => {
        const mochilaCard = document.createElement('div');
        mochilaCard.className = 'mochila-card';

        mochilaCard.innerHTML = `
            <img src="${mochila.imagen}" alt="${mochila.nombre}">
            <h2>${mochila.nombre}</h2>
            <p>${mochila.descripcion}</p>
            <p class="precio">${mochila.precio}</p>
        `;

        mochilasContainer.appendChild(mochilaCard);
    });

    appDiv.appendChild(mochilasContainer);
}

// Renderizar contenido al cargar la página
window.onload = function() {
    renderMochilas();
};
