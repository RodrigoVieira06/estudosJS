function imprimirMensagem() {
    let hora = obterHoraAtual();

    console.log(obterMensagem(hora));

}


function obterMensagem(hora) {
    if (hora < 6) return "Boa Madrugada!";
    if (hora < 12) return "Bom Dia!";
    if (hora < 18) return "Boa Tarde!";
    return "Boa Noite!";
}


function obterHoraAtual() {
    let dataAtual = new Date();
    let horaAtual = dataAtual.getHours();

    console.log("Data Atual:", dataAtual);
    console.log("Hora Atual:", horaAtual, "horas");

    return horaAtual;
}