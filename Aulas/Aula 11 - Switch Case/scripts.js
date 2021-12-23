function definirTipoUsuario(tipo) {
    switch (tipo) {
        case 'comum':
            console.log("Tipo de usuário definido como 'Comum'.");
            break;

        case 'gerente':
            console.log("Tipo de usuário definido como 'Gerente'.");
            break;

        case 'diretor':
            console.log("Tipo de usuário definido como 'Diretor'.");
            break;

        default: //Caso o parâmetro de entrada não seja nenhum dos cases anteriores, deve-se adicionar um default para último caso.
            console.error("Usuário não reconhecido.");
    }
}