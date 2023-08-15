const timeElement = document.getElementById("time");
const dayElement = document.getElementById("date");
const formatToggle = document.getElementById("toggle-btn");
let is24HourFormat = true;

formatToggle.addEventListener('click', () => {is24HourFormat = !is24HourFormat});

function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month:'long', day:'numeric'};
    const dateString = now.toLocaleDateString(undefined, options);
    const timeString = is24HourFormat
    ? now.toLocaleTimeString('en-US', {hour12: false})
    : now.toLocaleTimeString('en-US');
    dayElement.textContent= `${dateString}`
    timeElement.textContent = `${timeString}`;
}
updateTime();
setInterval(updateTime, 1000);