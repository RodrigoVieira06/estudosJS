let corAtual = "vermelho";


function funcoes(cor, tonalidade) {
    console.log("Cor inicial:",corAtual);
    mudaCor(cor, tonalidade);
    console.log("Nova cor:",corAtual);
}


function mudaCor(cor, tonalidade) {
    corAtual = cor + " " + tonalidade;
}