const designs = [
  { id: 'd1', src: 'images/design1.png', name: 'Abstract 1', tags: ['abstract','lines'] },
  { id: 'd2', src: 'images/design2.png', name: 'Abstract 2', tags: ['abstract','dots'] },
  { id: 'd3', src: 'images/design3.png', name: 'Abstract 3', tags: ['shape','geo'] }
];

function qs(sel) { return document.querySelector(sel); }
function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }

function goToDesign(type) {
  window.location.href = `design.html?shirt=${type}`;
}

function initDesigner() {
  const params = new URLSearchParams(window.location.search);
  const shirtType = params.get('shirt') || 'crewneck';
  const shirtBase = qs('#shirtBase');

  if (shirtBase) shirtBase.src = `images/${shirtType}.png`;

  renderDesignThumbnails();
  attachColorHandlers();
  attachSizeControls();
}

function renderDesignThumbnails() {
  const container = qs('.designs');
  if (!container) return;

  container.innerHTML = '';

  designs.forEach(d => {
    const img = document.createElement('img');
    img.src = d.src;
    img.alt = d.name;
    img.dataset.id = d.id;
    img.title = d.name;
    img.width = 80;
    img.height = 80;
    img.addEventListener('click', () => applyDesign(d.id));
    container.appendChild(img);
  });
}

function applyDesign(idOrSrc) {
  const overlay = qs('#designOverlay');
  if (!overlay) return;

  if (idOrSrc.startsWith && idOrSrc.startsWith('images/')) {
    overlay.src = idOrSrc;
    overlay.dataset.designId = '';
    return;
  }

  const found = designs.filter(d => d.id === idOrSrc)[0];
  if (found) {
    overlay.src = found.src;
    overlay.dataset.designId = found.id;
  } else {
    overlay.src = '';
    overlay.dataset.designId = '';
  }
}

function changeColor(color) {
  const overlay = qs('#colorOverlay');
  if (!overlay) return;
  overlay.style.backgroundColor = color;
}


function attachSizeControls() {
  const wrapper = document.createElement('div');
  wrapper.className = 'size-controls';
  wrapper.innerHTML = `<label>Design size</label><input type="range" min="20" max="80" value="46" id="designSizeRange">`;
  const controlsSection = qs('.controls');
  if (controlsSection) controlsSection.appendChild(wrapper);

  const range = qs('#designSizeRange');
  range.addEventListener('input', (e) => {
    const val = e.target.value;
    const design = qs('#designOverlay');
    if (design) {
      design.style.width = val + '%';
    }
  });
}

function computeDesignTagSummary() {
  const allTags = designs.map(d => d.tags).flat();
  const counts = allTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  return counts;
}

function attachColorHandlers() {
  const buttons = qsa('.colors button');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const bg = window.getComputedStyle(btn).backgroundColor;
      changeColor(rgbToHex(bg));
    });
  });
}

function rgbToHex(rgb) {
  const m = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!m) return rgb;
  const r = parseInt(m[1],10).toString(16).padStart(2,'0');
  const g = parseInt(m[2],10).toString(16).padStart(2,'0');
  const b = parseInt(m[3],10).toString(16).padStart(2,'0');
  return `#${r}${g}${b}`;
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains('designer') || qs('#shirtBase')) {
    initDesigner();
  }
});
