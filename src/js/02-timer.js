// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const startButton = document.querySelector('button[data-start="start"]');
const dataInputField = document.querySelector('#datetime-picker');

const timerDays = document.querySelector(".value[data-days]"); 
const timerHours = document.querySelector(".value[data-hours]"); 
const timeMinutes = document.querySelector(".value[data-minutes]"); 
const timeSeconds = document.querySelector(".value[data-seconds]"); 

let timerId = null;
let isActive = false;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

startButton.addEventListener('click', startTime);
dataInputField.addEventListener('input', testTime);

function clearDate() {
    dataInputField.value = null;
}

flatpickr(dataInputField, options);

clearDate();

function testTime() {
const todayDate = new Date();
const targetDate = Date.parse(dataInputField.value);
    addClassButton();
    if (todayDate[Symbol.toPrimitive]('number') > targetDate) {
        window.alert("Please choose a date in the future")
    }
}

function startTime() {
    if (isActive) {
        return;
    }
    isActive = true;
     timerId = setInterval(() => {
         const currentDate = new Date();
         const deltaTime = Date.parse(dataInputField.value) - currentDate;
         if (deltaTime < 10) {
             alert("Відлік часу завершено");
             stopTimer() 
             return;
         }
         const timeComponents = convertMs(deltaTime);
       
    timerDays.textContent = addLeadingZero(timeComponents.days);
    timerHours.textContent = addLeadingZero(timeComponents.hours);
    timeMinutes.textContent = addLeadingZero(timeComponents.minutes);
    timeSeconds.textContent = addLeadingZero(timeComponents.seconds);
    }, 1000);
}

function stopTimer() {
    clearInterval(timerId);
    let isActive = false;
}

function addClassButton () {
    startButton.classList.add("activation-date");
}

function addLeadingZero(value) {
    return String(value).padStart(2, "0");    
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
};
