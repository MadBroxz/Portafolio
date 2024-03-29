// Verificar si el dispositivo es móvil
const isMobile = window.matchMedia("only screen and (max-width: 600px)").matches;

// Si no es móvil, aplicar los efectos de ScrollReveal
if (!isMobile) {
    const SR = ScrollReveal();

    SR.reveal('.container', {
        duration: 2000,
        origin: 'left',
        distance: '300px',
    });

    SR.reveal('.calendario', {
        duration: 3000,
        origin: 'bottom',
        distance: '300px',
    });

    SR.reveal('.Loc', {
        duration: 2000,
        origin: 'top',
        distance: '300px',
    });

    SR.reveal('.tec-logos', {
        duration: 3000,
        origin: 'right',
        distance: '300px',
    });

    SR.reveal('.Servicios', {
        duration: 4000,
        origin: 'bottom',
        distance: '300px',
    });
}
