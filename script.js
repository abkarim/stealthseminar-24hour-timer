const parentId = null; // element to append timer
const parentElement = parentId === null ? document.body : document.querySelector(parentId);
const container = document.createElement('div');
container.id = 'ss-24-hour-timer-container';

// Create hour element
const hourElement = document.createElement('div');
const hour_text = document.createElement('div');
const hour_number = document.createElement('span');
hour_number.classList.add('hour');
hour_number.textContent = 24;
hour_text.textContent = 'HOURS'
hour_text.classList.add('text')
hourElement.appendChild(hour_number);
hourElement.appendChild(hour_text);

// Create minute element
const minuteElement = document.createElement('div');
const minute_text = document.createElement('div');
const minute_number = document.createElement('span');
minute_number.classList.add('minute');
minute_number.textContent = '00';
minute_text.textContent = 'MINUTES'
minute_text.classList.add('text')
minuteElement.appendChild(minute_number);
minuteElement.appendChild(minute_text);

// Create second element
const secondElement = document.createElement('div');
const second_text = document.createElement('div');
const second_number = document.createElement('span');
second_number.classList.add('second');
second_number.textContent = '00';
second_text.textContent = 'SECONDS'
second_text.classList.add('text')
secondElement.appendChild(second_number);
secondElement.appendChild(second_text);

// Time interval
let timer = null;

// Styles
const styles = `
    /*Container */
    #ss-24-hour-timer-container {
        display: flex;
        gap: 1rem;
        background-color: white;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    /* Number */
    #ss-24-hour-timer-container .hour,
    #ss-24-hour-timer-container .minute,
    #ss-24-hour-timer-container .second
    {
        background-color: #1a9dd1;
        border-radius: 0.1rem;
        color: white;
        display: inline-block;
        font-size: 2.5rem;
        padding: 1rem;
    }
    /* Text */
    #ss-24-hour-timer-container .text
    {
        color:  #202020;
        font-size: 0.8rem;
        letter-spacing: 0.1rem;
        margin-top: 0.1rem;
        text-align: center;
    }
`;

// Append style
const style = document.createElement('style');
style.setAttribute('type', 'text/css');
style.textContent = styles;

// Append to dom
container.appendChild(hourElement);
container.appendChild(minuteElement);
container.appendChild(secondElement);
parentElement.prepend(container);
document.head.appendChild(style);

function countDown() {
    const time = {
        hour: parseInt(hour_number.innerText),
        minute: parseInt(minute_number.innerText),
        second: parseInt(second_number.innerText)
    }

    // second
    if (time.second === 0) {

        // minute
        if (time.minute < 1) {

            // hour
            if (time.hour < 1) {
                // Stop time
                clearInterval(timer);
                return
            } else if (time.hour < 11) {
                hour_number.innerText = `0${time.hour - 1}`;
            } else {
                hour_number.innerText = time.hour - 1;
            }

            // Reset second
            minute_number.innerText = 59;

        } else if (time.minute < 11) {
            minute_number.innerText = `0${time.minute - 1}`;
        } else {
            minute_number.innerText = time.minute - 1;
        }

        // Reset second
        second_number.innerText = 59;

    } else if (time.second < 11) {
        second_number.innerText = `0${time.second - 1}`;
    } else {
        second_number.innerText = time.second - 1;
    }

}

// Timer
timer = setInterval(countDown, 1000);
