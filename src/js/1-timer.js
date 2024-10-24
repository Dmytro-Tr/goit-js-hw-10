// es modules are recommended, if available, especially for typescript
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

flatpickr('input#datetime-picker', {});

const startBtn = document.querySelector('button[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const datatimePicker = document.querySelector('#datetime-picker');

startBtn.disabled = true; //Кнопка не активна

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();

    if (selectedDates[0].getTime() < currentDate) {
      iziToast.show({
        message: 'Please choose a date in the future',
      });
      startBtn.disabled = true; //Кнопка не активна
    } else {
      // selectedDates = selectedDates[0].getTime();
      startBtn.disabled = false; //Кнопка активна
    }
  },
};

flatpickr(datatimePicker, options);
let userSelectedDate;

function startTimer() {
  startBtn.disabled = true;
  datatimePicker.disabled = true;

  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const ms = userSelectedDate - currentTime;

    // console.log(intervalId);

    if (ms <= 1000) {
      clearInterval(intervalId);
      datatimePicker.disabled = true;
    }
  }, 1000);
}

startBtn.addEventListener('click', startTimer);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
