let intervalId;

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedTime = `${formatDigit(hours)}:${formatDigit(minutes)}:${formatDigit(seconds)}`;

    document.getElementById('time').textContent = formattedTime;
}

function formatDigit(digit) {
    return digit < 10 ? '0' + digit : digit;
}

document.getElementById('startBtn').addEventListener('click', function() {
    intervalId = setInterval(updateClock, 1000);
    updateClock(); // Initial call to display the clock immediately
});

document.getElementById('stopBtn').addEventListener('click', function() {
    clearInterval(intervalId);
});

// Initial call to display the clock immediately
updateClock();
