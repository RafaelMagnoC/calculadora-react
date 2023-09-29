import React, { Component } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import "./App.css"


class Calculadora extends Component {

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

        const adicionarDigito = n => this.adicionarDigito(n);
        const enviarOperacao = n => this.enviarOperacao(n);

        return (
            <div className="calculadora">
                <Display value={100} />
                <Button label="AC" click={() => this.limparDisplay()} />
                <Button label="/" />
                <Button label="7" />
                <Button label="8" />
                <Button label="9" />
                <Button label="*" />
                <Button label="4" />
                <Button label="5" />
                <Button label="6" />
                <Button label="-" />
                <Button label="1" />
                <Button label="2" />
                <Button label="3" />
                <Button label="+" />
                <Button label="0" />
                <Button label="." />
                <Button label="=" />
            </div>
        )
    }
}


export default Calculadora;