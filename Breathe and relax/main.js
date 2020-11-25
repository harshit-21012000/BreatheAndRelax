// const cointainer = document.getElementById('cointainer');
// const text = document.getElementById('text');

// const tottalTime = 7500;
// const breatheTime = (tottalTime / 5) * 2;
// const holdTime = tottalTime / 5;

// function breatheAnimation() {
//   text.innerHTML = 'Breathe In!';
//   cointainer.className = 'cointainer grow';

//   setTimeout(() => {
//     text.innerHTML = 'Hold!';

//     setTimeout(() => {
//       text.innerHTML = 'Breathe Out!';
//       cointainer.className = 'cointainer shrink';
//     }, holdTime);
//   }, breatheTime);
// }

// setInterval(breatheAnimation, tottalTime);

const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
