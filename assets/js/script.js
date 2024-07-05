let i = 0;
let text = "Hola, soy Bianca Salcedo";
setTimeout(function typing() {
    if (i < text.length) {
        document.getElementById('text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 90);
    }
}, 1500);



$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        delay: { "show": 100, "hide": 100 }, // Ajuste del tiempo de aparición y desaparición
        trigger: 'hover focus' // Hacer que el tooltip aparezca en hover y focus
    });
});


// juego
document.addEventListener('DOMContentLoaded', () => {
    const moles = document.querySelectorAll('.mole');
    const scoreDisplay = document.getElementById('score');
    const startButton = document.getElementById('startButton');
    
    let score = 0;
    let gameActive = false;
    let currentMole;

    function getRandomMole() {
        const randomIndex = Math.floor(Math.random() * moles.length);
        return moles[randomIndex];
    }

    function showMole() {
        if (!gameActive) return;
        if (currentMole) currentMole.style.display = 'none';
        currentMole = getRandomMole();
        currentMole.style.display = 'block';
        setTimeout(showMole, 800);
    }

    moles.forEach(mole => {
        mole.addEventListener('click', () => {
            if (gameActive && mole === currentMole) {
                score++;
                scoreDisplay.textContent = score;
                mole.style.display = 'none';
            }
        });
    });

    startButton.addEventListener('click', () => {
        score = 0;
        scoreDisplay.textContent = score;
        gameActive = true;
        startButton.disabled = true;
        startButton.classList.remove('btn-jumping');  // Detener la animación de salto
        showMole();
        setTimeout(() => {
            gameActive = false;
            startButton.disabled = false;
            startButton.classList.add('btn-jumping');  // Reiniciar la animación de salto
            if (currentMole) currentMole.style.display = 'none';
            alert(`Juego terminado. Tu puntuación es: ${score}`);
        }, 30000);
    });
});
