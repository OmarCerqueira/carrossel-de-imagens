/*
OBJETIVO - Clicar nas setas, avançar e voltar, e mudar os slides.
    * Ver pra que eu vou precisar de variáveis e em seguida criá-las.

Passo 1 - Clicar na seta avançar e ir para o próximo slide.
    - pegar o elemento da seta avançar
    - colocar uma escuta
    - adicionar um evento
    - remover classe mostrar
    - adicionar classe mostrar
    Passo 1.1 - Mudar opacidade da seta avançar quando alcançar o último slide.
        - criar uma condição que retorne e pare de executar

Passo 2 - Clicar na seta voltar e ir para o slide anterior.
    - pegar o elemento da seta voltar
    - colocar uma escuta
    - adicionar um evento
    - remover classe mostrar
    - adicionar classe mostrar
    Passo 2.2 - Mudar a opacidade da seta quando não for mais o primeiro slide.
        -criar uma condição de return quando isso acontecer
 */



const setaAvancar = document.querySelector('#seta-avancar');
const setaVoltar = document.querySelector('#seta-voltar');
const imagens = document.querySelectorAll('.slide');
// console.log(imagens);
let imagemAtual = 2;


setaAvancar.addEventListener('click', () => {
    if (imagemAtual == imagens.length - 1) {
        return;
    }
    
    esconderImagemAberta();

    imagemAtual++;

    adicionarImagemAtual();

    adicionarERemoverOpacidadeSetas();
});

setaVoltar.addEventListener('click', () => {
    if (imagemAtual == 0) {
        return;
    }
    
    esconderImagemAberta();

    imagemAtual--;

    adicionarImagemAtual();

    adicionarERemoverOpacidadeSetas();
});

function adicionarERemoverOpacidadeSetas() {
    let naoEhPrimeiraImagem = imagemAtual != 0;
    if (naoEhPrimeiraImagem) {
        setaVoltar.classList.remove('opacidade');
    } else {
        setaVoltar.classList.add('opacidade');
    }

    let ehUltimaImagem = imagemAtual == imagens.length - 1;
    if (ehUltimaImagem) {
        setaAvancar.classList.add('opacidade');
    } else {
        setaAvancar.classList.remove('opacidade');
    }
}

function adicionarImagemAtual() {
    imagens[imagemAtual].classList.add('mostrar');
}

function esconderImagemAberta() {
    let imagemAberta = document.querySelector('.mostrar');
    // console.log(imagemAberta);
    imagemAberta.classList.remove('mostrar');
}
