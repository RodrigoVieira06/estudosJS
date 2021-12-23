function lacoFor(valorInicial, valorMaximo) {
    informarValores(valorInicial, valorMaximo);

    for (let i = valorInicial; i <= valorMaximo; i++) {
        if (i % 2 !== 0) {
            console.log("Número", i, "é ímpar.");
        }
        else {
            console.log("Número", i, "é par.");
        }
    }
}


function lacoWhile(valorInicial, valorMaximo) {
    informarValores(valorInicial, valorMaximo);

    while (valorInicial <= valorMaximo) {
        if (valorInicial % 2 !== 0) {
            console.log("Número", valorInicial, "é ímpar.");
        }
        else {
            console.log("Número", valorInicial, "é par.");
        }
        valorInicial++;
    }
}


function lacoDoWhile(valorInicial, valorMaximo) {
    informarValores(valorInicial, valorMaximo);
}


function lacoForIn() {

}


function lacoForOf() {

}


function informarValores(valorInicial, valorMaximo) {
    console.log("Valor inicial:", valorInicial);
    console.log("Valor máximo:", valorMaximo);
}