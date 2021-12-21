function funcaoSemRetorno(nome) {
    console.log("O nome é:", nome)
}


function funcaoComRetorno(valor1,valor2) {
    let resultado = MultiplicarPorDois(valor1);
    console.log(valor1 + " * 2 =",resultado);

    console.log(valor2 + " * 2 =",MultiplicarPorDois(valor2));
}


function MultiplicarPorDois(valor) {

    return valor * 2;
}