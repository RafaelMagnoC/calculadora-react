import React, { Component } from "react";
import Button from "./Button";
import Display from "./Display";
import "./Calculadora.css";


const estadoInicialCalculadora = {
    valorAtualDoDisplay: "0",
    limparDisplay: false,
    armezarTemporariamenteAOperacaoDeCalculo: null,
    valoresASeremCalculados: [0, 0],
    indiceDoValorQueEstaSendoDigitado: 0

}


class Calculadora extends Component {

    state = { ...estadoInicialCalculadora };

    constructor(props) {
        super(props)
        this.limparDisplay = this.limparDisplay.bind(this);
        this.enviarOperacao = this.enviarOperacao.bind(this);
        this.adicionarDigito = this.adicionarDigito.bind(this);
    }

    limparDisplay() {

        this.setState({ ...estadoInicialCalculadora });
    }

    enviarOperacao(operacao) {
        console.log(operacao);
    }

    adicionarDigito(n) {

        if (n === "." && this.state.valorAtualDoDisplay.includes(".")) {
            return;
        }

        const limparDisplaAgora = this.state.valorAtualDoDisplay === "0" || this.state.limparDisplay;

        const valorAtual = limparDisplaAgora ? "" : this.state.valorAtualDoDisplay;

        const valorAcumulado = valorAtual + n;

        this.setState({ valorAtualDoDisplay: valorAcumulado, limparDisplaAgora: false })

        if (n !== ".") {
            const indice = this.state.indiceDoValorQueEstaSendoDigitado;
            const valorStringParaFloat = parseFloat(valorAcumulado);
            const valor = [...this.state.valoresASeremCalculados];
            valor[indice] = valorStringParaFloat;
            this.setState({ valoresASeremCalculados: valor });
        }

    }

    render() {

        return (
            <div className="calculadora">
                <Display value={this.state.valorAtualDoDisplay} />
                <Button label="AC" click={this.limparDisplay} triple />
                <Button label="/" click={this.enviarOperacao} operation />
                <Button label="7" click={this.adicionarDigito} />
                <Button label="8" click={this.adicionarDigito} />
                <Button label="9" click={this.adicionarDigito} />
                <Button label="*" click={this.enviarOperacao} operation />
                <Button label="4" click={this.adicionarDigito} />
                <Button label="5" click={this.adicionarDigito} />
                <Button label="6" click={this.adicionarDigito} />
                <Button label="-" click={this.enviarOperacao} operation />
                <Button label="1" click={this.adicionarDigito} />
                <Button label="2" click={this.adicionarDigito} />
                <Button label="3" click={this.adicionarDigito} />
                <Button label="+" click={this.enviarOperacao} operation />
                <Button label="0" click={this.adicionarDigito} double />
                <Button label="." click={this.adicionarDigito} />
                <Button label="=" click={this.enviarOperacao} operation />
            </div>
        )
    }
}


export default Calculadora;