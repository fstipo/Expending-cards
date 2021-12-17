const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const imgID = [960, 666, 525, 901, 685];
const imgTxt = [
  'Explore the world',
  'Wild Forest',
  'Sahara sand',
  'Winter',
  'Mountains clouds',
];
for (let i = 0; i < 5; i++) {
  const bgImg = `background-image: url('https://picsum.photos/id/${imgID[i]}/600')`;
  const panelEl = document.createElement('div');
  panelEl.classList.add('panel');
  panelEl.setAttribute('style', bgImg);

  container.appendChild(panelEl);
  const h3 = document.createElement('h3');
  h3.classList.add('panel-title');
  h3.textContent = imgTxt[i];
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
