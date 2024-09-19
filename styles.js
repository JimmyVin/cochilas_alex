// Crear estilos CSS dinámicamente
const styles = `
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
    }
    h1 {
        text-align: center;
        color: #333;
    }
    .mochilas-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20px;
    }
    .mochila-card {
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin: 10px;
        padding: 20px;
        width: 300px;
        text-align: center;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .mochila-card img {
        max-width: 100%;
        border-radius: 5px;
    }
    .mochila-card h2 {
        color: #258FCA;
        font-size: 20px;
        margin-bottom: 10px;
    }
    .mochila-card p {
        font-size: 16px;
        color: #555;
    }
    .mochila-card .precio {
        font-weight: bold;
        font-size: 18px;
        color: #A9B5C3;
    }
`;

// Inyectar CSS al documento
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
