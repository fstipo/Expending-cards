const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  console.log(panel);
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.toggle('active');
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};
