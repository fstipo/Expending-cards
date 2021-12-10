const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

for (let i = 0; i < 5; i++) {
  const panelEl = document.createElement('div');
  panelEl.classList.add('panel');
  panelEl.setAttribute(
    'style',
    "background-image: url('https://picsum.photos/id/960/600')"
  );
  // panelEl[0].classList.add('active');
  container.appendChild(panelEl);
  const h3 = document.createElement('h3');
  h3.classList.add('panel-title');
  h3.textContent = 'Explore the world';
  panelEl.appendChild(h3);
}

container.firstChild.classList.add('active');

const panels = document.querySelectorAll('.panel');

const removeActiveClass = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add('active');
  });
});
