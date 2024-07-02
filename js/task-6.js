function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', function() {
  const input = document.querySelector('input[type="number"]');
  const createButton = document.querySelector('button[data-create]');
  const destroyButton = document.querySelector('button[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createButton.addEventListener('click', function() {
    const amount = parseInt(input.value);

    if (amount < 1 || amount > 100) {
      return; 
    }

    boxesContainer.innerHTML = '';
    
    const fragment = document.createDocumentFragment()

    let size = 30;

    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(div);
      size += 10;
    }

    boxesContainer.appendChild(fragment);

    input.value = '';
  });

  destroyButton.addEventListener('click', function() {
    boxesContainer.innerHTML = '';
  });
});