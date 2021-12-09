const divContainer = document.createElement('div');
divContainer.classList.add('container');
document.body.appendChild(divContainer);

for (let i = 0; i < 5; i++) {
  const divPanelEl = document.createElement('div');
  divPanelEl.classList.add('panel');
  divPanelEl.setAttribute(
    'style',
    "background-image: url('https://picsum.photos/id/960/600')"
  );
  divContainer.appendChild(divPanelEl);
  const h3 = document.createElement('h3');
  h3.classList.add('panel-title');
  h3.textContent = 'Explore the world';
  divPanelEl.appendChild(h3);
}

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
