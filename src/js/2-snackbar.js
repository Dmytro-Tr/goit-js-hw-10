// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const inputNumber = document.querySelector('input[type=number]');

addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delay = event.target.elements.delay.value;
  console.log(delay);
  const state = event.target.elements.state.value;
  console.log(state);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
    inputNumber.value = '';
  });

  promise
    .then(delay => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        titleSize: '16px',
        messageColor: '#fff',
        backgroundColor: '#59a10d',
        position: 'topRight',
        timeout: '3000',
        closeOnClick: 'true',
        progressBarColor: '#fff',
        transitionIn: 'bounceInDown',
        transitionOut: 'flipOutX',
      });
    })
    .catch(delay => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        titleSize: '16px',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        position: 'topRight',
        timeout: '3000',
        closeOnClick: 'true',
        progressBarColor: '#fff',
        transitionIn: 'bounceInDown',
        transitionOut: 'flipOutX',
      });
    });
}
