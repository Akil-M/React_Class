let intervalId;

function start() {
    intervalId = setInterval(() => {
        const countElement = document.getElementById('count');
        let val = Number(countElement.textContent);
        val++;
        countElement.textContent = val;
    }, 1000);
}

function stop() {
    clearInterval(intervalId);
    intervalId = 0;
}

function reset() {
    clearInterval(intervalId);
    intervalId = 0;
    document.getElementById('count').textContent = '0';
}