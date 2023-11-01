# Carrossel de Imagens
Construção de um carrossel de imagens, slider, utilizando HTML, CSS e Javascript.

## Desafio

Os usuários precisam:

- Clicar nas setas, voltar e avançar, e conseguir fazer a troca de imagens.
- Percerber que ao chegar no final do carrossel não haverá mais possibilidade de passar as imagens.
- Observar a opacidade das setas, o que indicará o final do carrossel.

## Captura de tela em uso

[<img src='./src/images/carrossel-imagens.gif' alt='Gif da Tela do Projeto Carrossel de Imagens'>](https://omarcerqueira.github.io/carrossel-de-imagens/)

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

### Desenvolvimento

- Marcação e semântica de HTML
- Propriedades customizadas de CSS
- Flexbox
- Variáveis, funções, estruturas condicionais, métodos e atributos de manipulação de elementos.

### Aprendizado

Durante a contrução do projeto foi necessário, primeiramente, a análise do que poderia ser feito e de que forma seria feito. A proporção que o projeto ía tomando forma, os desafios íam sendo superados e agregados ao aprendizado. A técnica position do css foi aprimorada e incrementada no aprendizado cada vez mais com a prática. Coloquei em prática técnicas do javascript como criação de variáveis, funções, arrays, estruturas de condições, métodos e atribuições. Com a manipulação de objetos foi possível alcançar o objetivo de interação com a tela através do javascript.

### Como Utilizar

- Clique nas setas para avançar ou voltar no painel.

    - Trechos de código:

```html
<a href="#" class="seta-voltar " id="seta-voltar">
    <img src="./src/images/seta.png" class="imagem-seta" alt="Seta Voltar">
</a>
```
```html
<div class="slide slide-marrom mostrar" >
        <div class="conteudo">
            <h2 class="titulo">Montanhas</h2>

            <p class="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quia id qui iure, quaerat voluptatem. Dolores quos, accusantium nisi, ex delectus architecto quam, assumenda quaerat fugit quas inventore? Natus, sapiente.</p>

            <a href="#" class="botao marrom">Saiba Mais</a>
        </div>
</div>
```
```css
.slider-images .slide {
    /* background-color: aquamarine; */
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100vw;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: 0.4s ease-in-out;
}
```
```css
.slide-verde {
    background: url(../images/flores-verdes.png);
}
```
```css
.conteudo {
    background-color: #ffffff;
    margin-left: 18rem;
    padding: 60px 65px;
    border-radius: 10px;
    width: 62rem;
    
}
```
```javascript
setaAvancar.addEventListener('click', () => {
    if (imagemAtual == imagens.length - 1) {
        return;
    }
    
    esconderImagemAberta();

    imagemAtual++;

    adicionarImagemAtual();

    adicionarERemoverOpacidadeSetas();
});
```
```javascript
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
```
```javascript
const setaAvancar = document.querySelector('#seta-avancar');
const setaVoltar = document.querySelector('#seta-voltar');
const imagens = document.querySelectorAll('.slide');
// console.log(imagens);
let imagemAtual = 2;
```
## Autor

- LinkedIn - [Omar Cerqueira](https://www.linkedin.com/in/omar-cerqueira-b83317226/)
- Github - [OmarCerqueira](https://github.com/OmarCerqueira)
- WhatsApp - 71 98201-1524

## Agradecimentos

Gratidão eterna ao pessoal do Dev em Dobro por me acompanhar nessa incrível jornada do mundo da tecnologia.

- Site - [Dev Quest](https://devemdobro.com)
- LinkedIn - [Dev em Dobro](https://www.linkedin.com/company/dev-em-dobro/)
- Discord - [Guilda Dev em Dobro](https://discord.com/channels/821364094878613524/821364094878613528)
- Github - [devemdobro](https://github.com/devemdobro)