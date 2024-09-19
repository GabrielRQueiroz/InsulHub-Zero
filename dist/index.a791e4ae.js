const display = document.getElementById('ClockDisplay');
function updateTime() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    display.innerText = `${hour} : ${minutes}`;
}
setInterval(updateTime, 1000);

//# sourceMappingURL=index.a791e4ae.js.map
