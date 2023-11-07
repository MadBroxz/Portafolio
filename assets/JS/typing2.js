document.addEventListener("DOMContentLoaded", function () {
    const typingText2 = document.getElementById("typing-text2");
    const words = ["Tierra Azteca", "Tierra Guerrera", "M é x i c o"];

    let wordIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < words[wordIndex].length) {
            typingText2.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Velocidad de escritura
        } else {
            setTimeout(erase, 1000); // Tiempo antes de borrar
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText2.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50); // Velocidad de borrado
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500); // Tiempo antes de escribir la siguiente palabra
        }
    }

    type();
});
