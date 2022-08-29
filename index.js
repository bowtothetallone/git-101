const appElement = document.getElementById('app');
const clickyElement = document.getElementById('clicky');

const whatToDoWhenButtonIsClicked = function () {
  appElement.innerHTML = (
    'Omg it was clicked! The time is now: ' +
    (new Date().toJSON())
  );
}

clickyElement.addEventListener(
  'click',
  whatToDoWhenButtonIsClicked
);
