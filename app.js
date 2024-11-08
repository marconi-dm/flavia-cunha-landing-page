const words = ["Criatividade", "Personalização", "Exclusividade"];
let wordIndex = 0;
let charIndex = 0;
const typingText = document.getElementById('typing-text');
const typingSpeed = 150; // Velocidade de digitação
const erasingSpeed = 100; // Velocidade de apagar
const delayBetweenWords = 1000; // Pausa entre as palavras

function typeWord() {
    if (charIndex < words[wordIndex].length) {
        typingText.innerHTML += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWord, typingSpeed);
    } else {
        setTimeout(eraseWord, delayBetweenWords);
    }
}

function eraseWord() {
    if (charIndex > 0) {
        typingText.innerHTML = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseWord, erasingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Passa para a próxima palavra
        setTimeout(typeWord, typingSpeed);
    }
}

// Inicia o efeito de digitação
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeWord, delayBetweenWords);
});
