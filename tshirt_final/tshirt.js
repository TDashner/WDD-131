function goToDesign(type) {
    window.location.href=`design.html?shirt=${type}`
}

document.addEventListener(`DOMContentLoaded`, () => {
    const params = new URLSearchParams(window.location.search);
    const shirtType = params.get('shirt');
    const shirtBase = document.getElementById('shirtBase');

    if (shirtBase && shirtType) {
        shirtBase.src = `images/${shirtType}.png`;
    }
});

function applyDesign(src) {
    const overlay = document.getElementById('designOverlay');
    overlay.src = src;
}

function changeColor(color) {
    const overlay = document.getElementById('colorOverlay');
    overlay.style.backgroundColor = color;
}