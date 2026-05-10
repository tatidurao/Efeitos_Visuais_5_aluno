// Elementos flutuantes no hero
function createFloatingElements() {
    const container = document.getElementById('floatingContainer');
    //transparencias diferentes
    const colors = ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.15)'];
    //15 elementos flutuantes
    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');

        // Tamanho aleatório
        const size = Math.random() * 60 + 20; // 20px a 80px
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;

        // Posição inicial aleatória left horizontal e top vertical
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;

        // Cor aleatória
        element.style.background = colors[Math.floor(Math.random() * colors.length)];

        // Duração e delay aleatórios
        const duration = Math.random() * 30 + 20; // 20s a 50s
        const delay = Math.random() * 5; // 0s a 5s
        element.style.animationDuration = `${duration}s`;
        element.style.animationDelay = `${delay}s`;

        container.appendChild(element);
    }
}
//espere o HTML carregar
// Animações interativas nos cards
document.addEventListener('DOMContentLoaded', function () {
    createFloatingElements();

    //ANIMAÇÕES NOS CARDS
    // Cards de animação
    const bounceCard = document.getElementById('bounceCard');
    const pulseCard = document.getElementById('pulseCard');
    const rotateCard = document.getElementById('rotateCard');
    const shakeCard = document.getElementById('shakeCard');
    const floatCard = document.getElementById('floatCard');
    const colorCard = document.getElementById('colorCard');



    // Adicionar/remover classes de animação
    function toggleAnimation(card, animationClass) {
        const icon = card.querySelector('.animation-icon i');

        // Remover todas as classes de animação primeiro
        icon.classList.remove('bounce-animation', 'pulse-animation');

        // Adicionar a classe desejada
        icon.classList.add(animationClass);

        // Remover após 3 segundos
        setTimeout(() => {
            icon.classList.remove(animationClass);
        }, 3000);
    }

    bounceCard.addEventListener('click', () => toggleAnimation(bounceCard, 'bounce-animation'));
    pulseCard.addEventListener('click', () => toggleAnimation(pulseCard, 'pulse-animation'));
    rotateCard.addEventListener('click', () => toggleAnimation(rotateCard, 'rotate-animation'));
    shakeCard.addEventListener('click', () => toggleAnimation(shakeCard, 'shake-animation'));
    floatCard.addEventListener('click', () => toggleAnimation(floatCard, 'float-animation'));
    colorCard.addEventListener('click', () => toggleAnimation(colorCard, 'color-change'));

    // Efeito Parallax
    const parallaxContent = document.getElementById("parallaxContent")

    function checkParallaxVisible() {
        const rect = parallaxContent.getBoundingClientRect()

        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.8) {
            parallaxContent.classList.add('visible');
        }
    }

    window.addEventListener('scroll', checkParallaxVisible);
    checkParallaxVisible(); // Verificar na carga inicial


    // Custom cursor
    initCustomCursor();

    // Sistema de partículas
    createParticles();

})


// Custom cursor
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const interactiveElements = document.querySelectorAll('a, button, .animation-card, .hover-card');

    // Mover cursor
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`
        cursor.style.top = `${e.clientY}px`
    });

    // Adicionar efeito em elementos interativos
    interactiveElements.forEach(element => {
        /*Horizontal */
        element.addEventListener('mouseenter', () => {
            cursor.classList.add("hover")
        });
        /*Vertical */
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove("hover")
        });
    });

    // Esconder cursor quando sair da janela
    document.addEventListener('mouseout', () => {
        cursor.style.opacity = '0'
    });

    // Mostar quando cursor aparecer na janela
    document.addEventListener('mouseover', () => {
        cursor.style.opacity = '1'
    });

    // quando o botão do mouse é pressionado.
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });
    //quando o botão do mouse é solto.
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
}

function createParticles() {
    const container = document.getElementById('particleContainer');
    const colors = ['#ff416c', '#2575fc', '#6a11cb', '#00b894', '#fdcb6e'];



    // Adicionar mais partículas ao clicar/arrastar
    container.parentElement.addEventListener('mousemove', function (e) {
        if (e.buttons === 1) { // Botão do mouse pressionado
            for (let i = 0; i < 3; i++) {
               
            }
        }
    });
    // Adicionar mais partículas ao clicar
    container.parentElement.addEventListener('click', function (e) {
        for (let i = 0; i < 10; i++) {
           
        }
    });
}




function createParticleAtPosition(container, colors, x, y) {
   
}