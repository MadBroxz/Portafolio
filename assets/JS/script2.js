// // Función para descargar el PDF
function descargarPDF() {
    const urlDelPDF = "./assets/files/CV-Luis Mota-FrontEnd Dev.pdf"
    window.location.href = urlDelPDF
}


// Función para navegar a una sección
function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        changeTitle(sectionId);
    }
}

// Agrega un evento click a cada enlace del menú
const links = document.querySelectorAll('nav a');
    links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1); // Elimina el "#" del href
        navigateToSection(sectionId);
    });
});

// Función para cambiar el título de la página
function changeTitle(sectionName) {
    document.title = `Luis Mota | ${sectionName}`;
}
// Al cargar la página, establece el título inicial
document.addEventListener('DOMContentLoaded', function () {
    changeTitle("Home");
});

// Escucha el evento scroll para actualizar el título
document.addEventListener('scroll', function () {
    const sections = ["home", "acerca", "proyectos", "Game" ,"contacto"];
    const scrollPosition = window.scrollY + 1;

        for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
        if (section.offsetTop - 300 <= scrollPosition) {
        changeTitle(sections[i].charAt(0).toUpperCase() + sections[i].slice(1));
        break;
}
}
});
