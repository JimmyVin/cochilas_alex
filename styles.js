// Crear estilos CSS dinámicamente
const styles = `
    #inicio {
        text-align: justify;
    }
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
    p {
        text-align: center;
        color: #555;
    }
    #categorias {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 20px;
    }
    .categoria-card {
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin: 10px;
        padding: 20px;
        text-align: center;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        width: 150px;
        cursor: pointer;
        transition: box-shadow 0.3s;
    }
    .categoria-card:hover {
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }
    #productosContainer {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20px;
    }
    .producto-card {
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin: 10px;
        padding: 20px;
        text-align: center;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        width: 200px;
    }
    .producto-card img {
        max-width: 100%;
        border-radius: 5px;
    }
    button {
        margin: 10px auto;
        padding: 10px 20px;
        background-color: #258FCA;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: block;
    }
    button:hover {
        background-color: #1e70a0;
    }
`;

// Inyectar CSS al documento
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
