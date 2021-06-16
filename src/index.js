import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";

function CardItem(props) {
    return (
        <Route
            render={({ history }) => (
                <div
                    className="card_item"
                    onClick={() => {
                        history.push("/visualizar/" + props.item._id);
                    }}
                >
                    <h2>{props.item.nome}</h2>
                    <img
                        src={props.item.imagem}
                        alt={props.item.nome}
                        width="300"
                    />
                </div>
            )}
        />
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

class VisualizarItem extends React.Component {
    constructor(props) {
        super(props);

        this.id = this.props.match.params.id;

        this.state = {
            item: {},
        };
    }

    async componentDidMount() {
        const request = await fetch(
            "https://backend-flexivel.herokuapp.com/" + this.id,
            {
                headers: new Headers({
                    Authorization: "profpaulo.salvatore",
                }),
            }
        );

        const json = await request.json();

        // 2 - Atualiza o estado
        this.setState({
            item: json,
        });
    }

    render() {
        return (
            <div className="card_item">
                <h2>{this.state.item.nome}</h2>
                <img
                    src={this.state.item.imagem}
                    alt={this.state.item.nome}
                    width="300"
                />
                <div>{this.state.item.descricao}</div>
            </div>
        );
    }
}

function App() {
    return (
        <Switch>
            <Route path="/" exact={true} component={ListarItens} />

            <Route path="/visualizar/:id" component={VisualizarItem} />
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
