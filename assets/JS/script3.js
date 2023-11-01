function hoverCard(card, className) {
    const svg = card.querySelector(".logo");
    svg.classList.add(`svg-color-${className}`);
}

function unhoverCard(card, className) {
    const svg = card.querySelector(".logo");
    svg.classList.remove(`svg-color-${className}`);
}
