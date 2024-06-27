function tocaSom(nome_audio) {
    const elemento = document.querySelector(nome_audio);

    if (elemento && elemento.localName === 'audio') {
        elemento.currentTime = 0; // Reinicia o som
        elemento.play();
    } else {
        alert('Elemento não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onmousedown = function () {
        tecla.classList.add('ativa');
    };

    tecla.onmouseup = function () {
        tecla.classList.remove('ativa');
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
            tocaSom(idAudio); // Adiciona a função de tocar som no evento de tecla
        }
    };

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    };
}

// Função para mapear as teclas numéricas
document.addEventListener('keydown', function (evento) {
    const teclaNumerica = evento.key;
    if (teclaNumerica >= '1' && teclaNumerica <= '9') {
        const teclaIndex = teclaNumerica - '1'; // Ajusta o índice para começar de 0
        const tecla = listaDeTeclas[teclaIndex];
        const instrumento = tecla.classList[1];
        const idAudio = `#som_${instrumento}`;
        tecla.classList.add('ativa');
        tocaSom(idAudio);
    }
});

document.addEventListener('keyup', function (evento) {
    const teclaNumerica = evento.key;
    if (teclaNumerica >= '1' && teclaNumerica <= '9') {
        const teclaIndex = teclaNumerica - '1'; // Ajusta o índice para começar de 0
        const tecla = listaDeTeclas[teclaIndex];
        tecla.classList.remove('ativa');
    }
});
