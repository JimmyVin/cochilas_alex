// Crear estilos CSS dinámicamente
const styles = `
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
    }
    h1, h2 {
        text-align: center;
        color: #333;
    }
    .descripcion {
        padding: 20px;
        text-align: center;
        font-size: 18px;
        color: #555;
    }
    .categorias-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20px;
    }
    .categoria {
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin: 10px;
        padding: 20px;
        width: 200px;
        text-align: center;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        cursor: pointer;
    }
    .categoria:hover {
        background-color: #eaeaea;
    }
    .imagenes-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px;
    }
    .imagen-card {
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin: 10px;
        padding: 10px;
        text-align: center;
    }
    .imagen-card img {
        max-width: 100%;
        border-radius: 5px;
    }
    .loader {
        border: 16px solid #f3f3f3;
        border-top: 16px solid #3498db;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

// Inyectar CSS al documento
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
