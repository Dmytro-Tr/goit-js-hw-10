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

let userSelectedDate;
startBtn.addEventListener('click', startTimer);

startBtn.disabled = true; //Кнопка не активна

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();

    console.log(selectedDates[0]);
    // console.log(currentDate);

    if (selectedDates[0].getTime() < currentDate) {
      iziToast.show({
        message: 'Please choose a date in the future',
        messageColor: '#fff',
        backgroundColor: '#FF0000',
        messageSize: '20',
        position: 'topCenter',
      });
      startBtn.disabled = true; //Кнопка не активна
    } else {
      userSelectedDate = selectedDates[0].getTime();
      startBtn.disabled = false; //Кнопка активна

      // console.log(userSelectedDate);
    }
  },
};

flatpickr(datatimePicker, options);

function startTimer() {
  startBtn.disabled = true;
  datatimePicker.disabled = true;

  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = userSelectedDate - currentTime;

    console.log(deltaTime);

    if (deltaTime <= 0) {
      clearInterval(intervalId);
      datatimePicker.disabled = false;
      // Повідомлення про закінчення таймінгу
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    dataDays.textContent = addLeadingZero(days);
    dataHours.textContent = addLeadingZero(hours);
    dataMinutes.textContent = addLeadingZero(minutes);
    dataSeconds.textContent = `${seconds}`;
  }, 1000);
}

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

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
