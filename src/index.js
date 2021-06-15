import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function CardItem() {
    return (
        <div>
            <h2>Golum</h2>
            <img src="https://img.olhardigital.com.br/wp-content/uploads/2019/11/20191119040151-860x450.jpg" />
        </div>
    );
}

function ListarItens() {
    return (
        <div>
            <CardItem />
            <CardItem />
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
