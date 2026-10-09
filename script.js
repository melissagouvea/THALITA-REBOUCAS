function mostrarLivro(nome) {
    let mensagem = "";

    if (nome === "Fala Sério, Mãe!") {
        mensagem = "Uma história divertida sobre a relação entre mãe e filha, mostrando os conflitos, as descobertas e os momentos engraçados que fazem parte do crescimento.";
    } 

    else if (nome === "Fala Sério, Amor!") {
        mensagem = "Uma história sobre relacionamentos, primeiros amores, expectativas e as situações divertidas que envolvem a vida amorosa.";
    } 

    else if (nome === "Fala Sério, Professor!") {
        mensagem = "Uma obra cheia de humor que retrata o cotidiano escolar e as situações que acontecem entre alunos e professores.";
    } 

    else if (nome === "Ela Disse, Ele Disse") {
        mensagem = "Acompanhe Rosa e Léo em uma história sobre amizade, paquera, ciúmes e os desafios de uma nova fase escolar, contada pelos pontos de vista dos dois protagonistas.";
    }

    alert("📚 Você escolheu o livro: " + nome + "\n\n" + mensagem);
}