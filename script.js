let keyup;

document.addEventListener('keydown', (event) => {
  const keyPressed = event.code.toLowerCase();
  function keydown() {
    console.log(event);
    document.querySelector(`.btn-${keyPressed}`)
      .classList.add('button-keydown');
  }

  if (!keyup) {
    keydown();
  } else {
    document.querySelector(`.btn-${keyPressed}`)
      .classList.remove('button-keyup');
    keydown();
  }
});

document.addEventListener('keyup', (event) => {
  const keyPressed = event.code.toLowerCase();
  console.log(event);
  document.querySelector(`.btn-${keyPressed}`)
    .classList.add('button-keyup');
  keyup = true;
});