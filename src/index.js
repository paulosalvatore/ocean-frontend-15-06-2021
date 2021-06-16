import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";

function CardItem(props) {
    return (
        <div className="card_item">
            <h2>{props.item.nome}</h2>
            <img src={props.item.imagem} alt={props.item.nome} width="300" />
        </div>
    );
}

class ListarItens extends React.Component {
    // 1 - Definir estado inicial
    constructor(props) {
        super(props);

        this.state = {
            itens: [],
        };
    }

    async componentDidMount() {
        const request = await fetch("https://backend-flexivel.herokuapp.com/", {
            headers: new Headers({
                Authorization: "profpaulo.salvatore",
            }),
        });

        const json = await request.json();

        // 2 - Atualiza o estado
        this.setState({
            itens: json,
        });
    }

    render() {
        // 3 - Renderiza utilizando a informação que está no estado
        return (
            <div className="lista_itens">
                {this.state.itens.map((item, index) => (
                    <CardItem item={item} key={index} />
                ))}
            </div>
        );
    }
}

function App() {
    return (
        <Switch>
            <Route path="/" component={ListarItens} />
        </Switch>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
