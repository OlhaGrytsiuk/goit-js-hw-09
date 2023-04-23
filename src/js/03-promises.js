import { Notify } from 'notiflix';

form = document.querySelector('.form');
delay = document.querySelector('input[name="delay"]');
step = document.querySelector('input[name="step"]');
amount = document.querySelector('input[name="amount"]');

form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
function onFormSubmit(event) {
  event.preventDefault();
  let promises = [];
  for (let i = 0; i < +amount.value; i += 1) {
    createPromise(i + 1, +step.value * i + +delay.value)
      .then(({ position, delay }) =>
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notify.failure(`Rejected promise ${position} in ${delay}ms`)
      );
  }
}
