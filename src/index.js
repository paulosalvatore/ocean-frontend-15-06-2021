import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function CardItem(props) {
    return (
        <div>
            <h2>{props.nome}</h2>
            <img src={props.imagem} alt="Imagem da Personagem" width="300" />
        </div>
    );
}

function ListarItens() {
    return (
        <div>
            <CardItem
                nome="Golum"
                imagem="https://img.olhardigital.com.br/wp-content/uploads/2019/11/20191119040151-860x450.jpg"
            />
            <CardItem
                nome="Frodo"
                imagem="http://pm1.narvii.com/6308/61e613bfde1b95f18e14afda9fa97215cd2ee6e4_00.jpg"
            />
        </div>
    );
}

function App() {
    return <ListarItens />;
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
