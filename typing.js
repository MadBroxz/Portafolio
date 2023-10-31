document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById("typing-text");
    const words = ["BackEnd Dev", "FrontEnd Dev", "FullStack Dev"];

    let wordIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < words[wordIndex].length) {
            typingText.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Velocidad de escritura
        } else {
            setTimeout(erase, 1000); // Tiempo antes de borrar
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50); // Velocidad de borrado
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500); // Tiempo antes de escribir la siguiente palabra
        }
    }

    type();
});


