let resultado;


function operadorAritimetico(operacao, valor1, valor2 = 0) {
    mostrarValores(operacao, valor1, valor2)
    if (operacao == "somar") {
        resultado = valor1 + valor2;
    }
    else if (operacao == "subtrair") {
        resultado = valor1 - valor2;
    }
    else if (operacao == "multiplicar") {
        resultado = valor1 * valor2;
    }
    else if (operacao == "dividir") {
        resultado = valor1 / valor2;
    }
    else if (operacao == "exp") {
        resultado = valor1 ** valor2;
    }
    else if (operacao == "incrementar") {
        resultado = ++valor1;
    }
    else if (operacao == "decrementar") {
        resultado = --valor1;
    }
    else {
        console.error("Não foi possível reconhecer o tipo de operação do parêmetro inserido.");
        return;
    }
    mostrarResultado(resultado);
}


function operadorAtribuicao(operacao, valor1, valor2 = 0) {
    mostrarValores(operacao, valor1, valor2);

    if (operacao == "atribuir") {
        resultado = valor1;
    }
    else if (operacao == "somar") {
        resultado = valor1 += valor2;
    }
    else if (operacao == "subtrair") {
        resultado = valor1 -= valor2;
    }
    else {
        console.error("Não foi possível reconhecer o tipo de operação do parêmetro inserido.");
        return;
    }

    mostrarResultado(resultado);
}


function operadorTernario(pontos) {
    console.log("Pontuação do cliente: " + pontos);
    let tipo = pontos > 100 ? 'premium' : 'comum';
    console.log("Tipo do Cliente: " + tipo);
}


function operadorLogico(vaga, idade, possuiCarteira,operadorNOT=false) {
    let maiorDeIdade = verificarMaiorDeIdade(idade);
    let podeAplicar;

    if (vaga == "vagaAND") {
        podeAplicar = maiorDeIdade && possuiCarteira;
    }
    else if (vaga == "vagaOR"){
        podeAplicar = maiorDeIdade || possuiCarteira;
    }
    else{
        console.error("Tipo de vaga não reconhecida, favor verificar entrada.");
        return
    }

    if (operadorNOT){
        //Operador ! para trocar true para false
    }

    possuiCarteira = possuiCarteira == true ? "Sim" : "Não";
    maiorDeIdade = maiorDeIdade == true ? "Sim" : "Não";
    podeAplicar = podeAplicar == true ? "Sim" : "Não";

    console.log("Idade do candidato: ", idade);
    console.log("É maior de idade? " + maiorDeIdade);
    console.log("Possui carteira de trabalho? " + possuiCarteira);
    console.log("Pode aplicar à vaga? " + podeAplicar);
}


function coparacoesNaoBoleanos(corPersonalizada=null){
    let corPadrao = "Azul";
    let corEscolhida = corPersonalizada || corPadrao;

    console.log("A cor escolhida atualmente é:",corEscolhida);
}


function mostrarValores(operacao, valor1, valor2) {
    console.log("Operação selecionada: " + operacao);
    console.log("Valor1: " + valor1);
    console.log("Valor2: " + valor2);
}


function mostrarResultado(resultado) {
    console.log("Resultado: " + resultado);
}


function verificarMaiorDeIdade(idade) {
    if (idade < 18) {
        return false
    }
    else {
        return true
    }
}