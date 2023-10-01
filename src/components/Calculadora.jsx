import React, { Component }  from "react";
import Button from "./Button";
import Display from "./Display";
import "./Calculadora.css";

class Calculadora extends Component {

    constructor(props) {
        super(props)
        this.limparDisplay = this.limparDisplay.bind(this);
        this.enviarOperacao = this.enviarOperacao.bind(this);
        this.adicionarDigito = this.adicionarDigito.bind(this);
    }

    limparDisplay() {
        console.log("limpar");
    }

    enviarOperacao(operacao) {
        console.log(operacao);
    }

    adicionarDigito(n) {
        console.log(n);
    }

    render() {

        return (
            <div className="calculadora">
                <Display value={100} />
                <Button label="AC" click={this.limparDisplay} triple />
                <Button label="/" click={this.enviarOperacao} operation/>
                <Button label="7" click={this.adicionarDigito} />
                <Button label="8" click={this.adicionarDigito} />
                <Button label="9" click={this.adicionarDigito} />
                <Button label="*" click={this.enviarOperacao} operation/>
                <Button label="4" click={this.adicionarDigito} />
                <Button label="5" click={this.adicionarDigito} />
                <Button label="6" click={this.adicionarDigito} />
                <Button label="-" click={this.enviarOperacao} operation/>
                <Button label="1" click={this.adicionarDigito} />
                <Button label="2" click={this.adicionarDigito} />
                <Button label="3" click={this.adicionarDigito} />
                <Button label="+" click={this.enviarOperacao} operation/>
                <Button label="0" click={this.adicionarDigito} double />
                <Button label="." click={this.adicionarDigito} />
                <Button label="=" click={this.adicionarDigito} operation/>
            </div>
        )
    }
}


export default Calculadora;