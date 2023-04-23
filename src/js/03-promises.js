import { Notify } from 'notiflix';

const formInput = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

formInput.addEventListener('submit', onFormSubmit);

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
  const amountNumber = Number(amount.value);
  const stepNumber = Number(step.value);
  const delayNumber = Number(delay.value);
  for (let i = 0; i < amountNumber; i += 1) {
    createPromise(i + 1, stepNumber * i + delayNumber)
      .then(({ position, delay }) =>
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notify.failure(`Rejected promise ${position} in ${delay}ms`)
      );
  }
}
