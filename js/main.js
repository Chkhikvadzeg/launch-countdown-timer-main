const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const ChangeSettingsButton = document.querySelector('.client-timer');
const Settings = document.querySelector('.timer-settings')
let daysCounter = 13;
let hoursCounter = 23;
let minutesCounter = 59;
let secondsCounter = 59;
let daysInput = document.querySelector('#daysInput')
let hoursInput = document.querySelector('#hoursInput')
let minutesInput = document.querySelector('#minutesInput')
let secondsInput = document.querySelector('#secondsInput')
const saveButton = document.querySelector('#save')
const cancelButton = document.querySelector('#cancel');
const message = document.querySelector('.message');

window.addEventListener('load', () => {
    days.textContent = `${daysCounter}`;
    hours.textContent = `${hoursCounter}`;
    minutes.textContent = `${minutesCounter}`;
    seconds.textContent = `${secondsCounter}`;
    timer;
})

let timer = setInterval(() => {
    if(secondsCounter > 0){
        secondsCounter--;
        seconds.textContent = secondsCounter;
    }else{
        secondsCounter = 60;
        if(minutesCounter > 0){
            minutesCounter--;
            minutes.textContent = minutesCounter;
        }else {
            if(hoursCounter > 0){
                hoursCounter--;
                minutesCounter = 10;
                hours.textContent = hoursCounter;
                minutes.textContent = minutesCounter;
            }else{
                if(daysCounter > 0){
                    daysCounter--;
                    hoursCounter = 23;
                    days.textContent = daysCounter;
                    hours.textContent = hoursCounter;
                }
            }
        }
        seconds.textContent = secondsCounter;
    }
    if(secondsCounter === 0 && minutesCounter === 0 && hoursCounter === 0 && daysCounter === 0){
        clearInterval(timer);
    }
}, 1000)

ChangeSettingsButton.addEventListener('click', () => {
    ChangeSettingsButton.style.display = 'none';
    Settings.style.left = '0';
})

saveButton.addEventListener('click', () => {
    if(daysInput.value && hoursInput.value && minutesInput.value && secondsInput.value
        && +daysInput.value < 100 && +hoursInput.value < 23 && +minutesInput.value < 60 && +secondsInput.value < 60){
        days.textContent = daysInput.value;
        hours.textContent = hoursInput.value;
        minutes.textContent = minutesInput.value;
        seconds.textContent = secondsInput.value;
        daysCounter = daysInput.value;
        hoursCounter = hoursInput.value;
        minutesCounter = minutesInput.value;
        secondsCounter = secondsInput.value;
        resetClientInputs();
    }else {
        message.style.opacity = '1';
    }
})

cancelButton.addEventListener('click', () => {
    resetClientInputs();
})

const resetClientInputs = () => {
    ChangeSettingsButton.style.display = 'block';
    Settings.style.left = '-100%';
    daysInput.value = '';
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
    if(message.style.opacity = '1'){
        message.style.opacity = '0';
    }
}